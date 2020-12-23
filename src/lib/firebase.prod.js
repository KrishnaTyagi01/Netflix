import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'





//WE NEED CONFIG HERE
const config = {
    apiKey: "AIzaSyDE-2eiXVqtMijUtJ9UZpIhx1w19QFfxX8",
    authDomain: "netflix-clone-c9e2f.firebaseapp.com",
    databaseURL: "https://netflix-clone-c9e2f.firebaseio.com",
    projectId: "netflix-clone-c9e2f",
    storageBucket: "netflix-clone-c9e2f.appspot.com",
    messagingSenderId: "626043573316",
    appId: "1:626043573316:web:585153ab1a292e69601811"
}

const firebase = Firebase.initializeApp(config);

//SEED THE DATABASE HERE


export {firebase}