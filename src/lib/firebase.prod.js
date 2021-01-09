import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'





//WE NEED CONFIG HERE
const config = {
   // CONFIG FILES HERE
   
}

const firebase = Firebase.initializeApp(config);

//SEED THE DATABASE HERE


export {firebase}