// Import the functions you need from the SDKs you need
import dotenv from 'dotenv'
import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
const db = admin.firestore()

export default db
