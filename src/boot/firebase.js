import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBFCJY4yhhgRgPusQckE9y0Poyios2Bf8k',
  authDomain: 'meetup-9fcca.firebaseapp.com',
  databaseURL: 'https://meetup-9fcca.firebaseio.com',
  projectId: 'meetup-9fcca',
  storageBucket: 'meetup-9fcca.appspot.com',
  messagingSenderId: '614574972158',
  appId: '1:614574972158:web:da8bdf085b6436cbb359af'
}
// Initialize Firebase - Access Auth
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()

// const firebaseDb = firebaseApp.firestore()

export { firebaseAuth, firebaseApp }
