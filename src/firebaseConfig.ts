import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig: object = {
    apiKey: "AIzaSyC7uneQxy3xT7psDWsSrQFu-mnLI67b1A0",
    authDomain: "hilfsbereit-fbdb4.firebaseapp.com",
    databaseURL: "https://hilfsbereit-fbdb4.firebaseio.com",
    projectId: "hilfsbereit-fbdb4",
    storageBucket: "hilfsbereit-fbdb4.appspot.com",
    messagingSenderId: "453745012754",
    appId: "1:453745012754:web:acfaa902f7f8430397e8cb",
    measurementId: "G-LH28QKZ89E"
};

export const database = firebase.initializeApp(firebaseConfig).firestore().collection('lists')

export const databaseDoc = (id: string) => database.doc(id)