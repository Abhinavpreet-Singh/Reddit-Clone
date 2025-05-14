import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
// Admin SDK for better performance on server-side (optional)
import { adminDb } from '../../firebase/adminApp';

const Sitemap = async (req: NextApiRequest, res: NextApiResponse) => {  try {
    // Get all communities (using admin SDK for better performance)
    let communities: string[] = [];
    let posts: string[] = [];
    
    try {
      // Try using admin SDK first
      const communitiesSnapshot = await adminDb.collection('communities').get();
      communities = communitiesSnapshot.docs.map(doc => doc.id);
      
      // Get all posts
      const postsSnapshot = await adminDb.collection('posts').get();
      posts = postsSnapshot.docs.map(doc => doc.id);
    } catch (adminError) {
      console.error("Admin SDK error, falling back to client SDK:", adminError);
      
      // Fallback to client SDK
      const communitiesSnapshot = await getDocs(collection(firestore, 'communities'));
      communities = communitiesSnapshot.docs.map(doc => doc.id);
      
      // Get all posts
      const postsSnapshot = await getDocs(collection(firestore, 'posts'));
      posts = postsSnapshot.docs.map(doc => doc.id);
    }

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bluix.com</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${communities.map(community => `
  <url>
    <loc>https://bluix.com/c/${community}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>https://bluix.com/post/${post}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

    // Set the appropriate headers
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
};

export default Sitemap; 