import { Post } from '../atoms/postsAtom';
import { Timestamp } from 'firebase/firestore';

// Sample user IDs for creators
const userIds = {
  admin: 'BX5ohqUWKycZUqGN2kwP9lVHzS42',
  user1: 'XDrY6tNI9Gh4BXf38LXlSqz9nUQ2',
  user2: 'PfL8h7J5mQcNdO3tK6yRzV4Xs1W0',
  user3: 'MnB9vC2xZ1aQ7wE6rT5yU3iO4pP8',
};

// Sample community IDs
const communities = {
  technology: 'technology',
  design: 'design',
  programming: 'programming',
  news: 'news',
  gaming: 'gaming',
};

// Helper function to create timestamps
const createTimestamp = (daysAgo: number): Timestamp => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return Timestamp.fromDate(date);
};

// Mock posts data
export const mockPosts: Post[] = [
  {
    id: 'post1',
    communityId: communities.technology,
    creatorId: userIds.admin,
    creatorDisplayName: 'BluiX_Admin',
    title: 'Welcome to BluiX: The Next-Gen Community Platform',
    body: 'BluiX offers a seamless, modern experience for communities to connect and share. With our new dark navy blue theme, we\'ve reimagined what a social platform can be. Share your thoughts on the new design below!',
    numberOfComments: 42,
    voteStatus: 128,
    currentUserVoteStatus: 1,
    imageURL: 'https://source.unsplash.com/random/800x600/?technology',
    communityImageURL: '/images/BluiXColored.svg',
    createdAt: createTimestamp(0),
  },
  {
    id: 'post2',
    communityId: communities.design,
    creatorId: userIds.user1,
    creatorDisplayName: 'DesignExplorer',
    title: 'The Psychology of Color in UI Design: Why BluiX Chose Navy Blue',
    body: 'Deep navy blue creates a sense of trust, professionalism, and calming depth. The color choice for BluiX isn\'t just aesthetic - it\'s backed by color psychology research. Dark blue is associated with stability and intelligence, perfect for a platform focused on meaningful discussions.',
    numberOfComments: 23,
    voteStatus: 95,
    currentUserVoteStatus: 0,
    imageURL: 'https://source.unsplash.com/random/800x600/?design',
    communityImageURL: null,
    createdAt: createTimestamp(1),
  },
  {
    id: 'post3',
    communityId: communities.programming,
    creatorId: userIds.user2,
    creatorDisplayName: 'CodeCrafter',
    title: 'Building Responsive UI Components for BluiX with React and Chakra UI',
    body: 'I\'ve been exploring how BluiX implemented their component library. The combination of React and Chakra UI provides excellent flexibility and accessibility. Here\'s what I\'ve learned about creating consistent, themeable components...',
    numberOfComments: 15,
    voteStatus: 67,
    currentUserVoteStatus: 1,
    imageURL: null,
    communityImageURL: null,
    createdAt: createTimestamp(2),
  },
  {
    id: 'post4',
    communityId: communities.news,
    creatorId: userIds.user3,
    creatorDisplayName: 'TechInsider',
    title: 'BluiX Introduces Revolutionary Community Features',
    body: 'The latest update to BluiX brings several game-changing features: enhanced moderation tools, AI-powered content recommendations, and immersive thread navigation. This positions BluiX as the most advanced community platform available today.',
    numberOfComments: 31,
    voteStatus: 112,
    currentUserVoteStatus: 0,
    imageURL: 'https://source.unsplash.com/random/800x600/?news',
    communityImageURL: '/images/BluiX.svg',
    createdAt: createTimestamp(3),
  },
  {
    id: 'post5',
    communityId: communities.gaming,
    creatorId: userIds.user1,
    creatorDisplayName: 'DesignExplorer',
    title: 'New BluiX Gaming Community: Connect with Fellow Gamers',
    body: 'Excited to announce our new gaming community on BluiX! Share game reviews, find teammates, discuss strategies, and stay updated on gaming news. The clean UI of BluiX makes game screenshots look amazing!',
    numberOfComments: 8,
    voteStatus: 45,
    currentUserVoteStatus: 1,
    imageURL: 'https://source.unsplash.com/random/800x600/?gaming',
    communityImageURL: null, 
    createdAt: createTimestamp(4),
  },
];

// Sample comments data
export const mockComments = [
  {
    id: 'comment1',
    postId: 'post1',
    creatorId: userIds.user1,
    creatorDisplayName: 'DesignExplorer',
    communityId: communities.technology,
    text: 'The new design is incredible! Love the way the dark navy theme makes content pop.',
    createdAt: createTimestamp(0),
  },
  {
    id: 'comment2',
    postId: 'post1',
    creatorId: userIds.user2,
    creatorDisplayName: 'CodeCrafter',
    communityId: communities.technology,
    text: 'How are the animations so smooth? The interactions feel very natural.',
    createdAt: createTimestamp(0),
  },
  {
    id: 'comment3',
    postId: 'post2',
    creatorId: userIds.user3,
    creatorDisplayName: 'TechInsider',
    communityId: communities.design,
    text: 'Great insights on color psychology. The blue definitely creates a feeling of depth.',
    createdAt: createTimestamp(1),
  }
];

// Sample community data
export const mockCommunities = [
  {
    id: communities.technology,
    creatorId: userIds.admin,
    numberOfMembers: 5782,
    privacyType: 'public',
    createdAt: createTimestamp(30),
    imageURL: '/images/BluiXColored.svg',
    about: 'A community for discussing the latest advances in technology and their impact on society. From consumer electronics to enterprise solutions, we cover it all.',
  },
  {
    id: communities.design,
    creatorId: userIds.user1,
    numberOfMembers: 3241,
    privacyType: 'public',
    createdAt: createTimestamp(45),
    imageURL: null,
    about: 'For designers and design enthusiasts to share work, get feedback, and discuss trends in UI/UX, graphic design, and more.',
  },
  {
    id: communities.programming,
    creatorId: userIds.user2,
    numberOfMembers: 8954,
    privacyType: 'public',
    createdAt: createTimestamp(60),
    imageURL: null,
    about: 'A place to discuss programming languages, frameworks, best practices, and help each other solve coding challenges.',
  },
  {
    id: communities.news,
    creatorId: userIds.admin,
    numberOfMembers: 12483,
    privacyType: 'public',
    createdAt: createTimestamp(90),
    imageURL: '/images/BluiX.svg',
    about: 'Stay updated with the latest news across technology, science, business, and more.',
  },
  {
    id: communities.gaming,
    creatorId: userIds.user1,
    numberOfMembers: 7621,
    privacyType: 'public',
    createdAt: createTimestamp(20),
    imageURL: null,
    about: 'A community for gamers to discuss games, share experiences, find teammates, and stay updated on gaming news.',
  },
];
