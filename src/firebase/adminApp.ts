import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// For server-side rendering and API routes
// Get service account credentials
let serviceAccount;

try {
  // In production, we should use environment variables
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } else {
    // In development, we can use the JSON file
    serviceAccount = require('../../bluix-605e8-firebase-adminsdk-fbsvc-60354d940e.json');
  }
} catch (error) {
  console.error("Error loading service account:", error);
}

if (!getApps().length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
    console.log('Firebase admin initialized');
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
    // Fallback to default initialization without credentials
    try {
      admin.initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      });
      console.log('Firebase admin initialized with default credentials');
    } catch (fallbackError) {
      console.error('Firebase admin fallback initialization error:', fallbackError);
    }
  }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
export const adminStorage = admin.storage();

export default admin;
