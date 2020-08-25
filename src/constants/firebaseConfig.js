import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions' // <- needed if using httpsCallable
// import 'firebase/database'

const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'custom-rune-pages.firebaseapp.com',
  databaseURL: 'https://custom-rune-pages.firebaseio.com',
  projectId: 'custom-rune-pages',
  storageBucket: 'custom-rune-pages.appspot.com',
  messagingSenderId: 'YOUR_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID',
}

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

firebase.initializeApp(config)
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
firebase.functions() // <- needed if using httpsCallable

export default firebase
