import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBK85w9cYWw1uTd1iMt1A9yMu6Gv9P8qqw',
  authDomain: 'react-native-firebase-1c66a.firebaseapp.com',
  databaseURL: 'https://react-native-firebase-1c66a.firebaseio.com',
  projectId: 'react-native-firebase-1c66a',
  storageBucket: 'react-native-firebase-1c66a.appspot.com',
  messagingSenderId: '115068133196',
  appId: '1:115068133196:web:8cb90f89e8dd7c2daff9e9'
}
//initialize firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default {
  firebase,
  db
}
