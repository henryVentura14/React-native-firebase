import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
 
}
//initialize firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default {
  firebase,
  db
}
