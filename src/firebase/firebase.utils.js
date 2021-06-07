import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDc3zQ2tljhXvPOTBVS4CIBjF3M7qcF6ic",
    authDomain: "crwn-db-d7158.firebaseapp.com",
    projectId: "crwn-db-d7158",
    storageBucket: "crwn-db-d7158.appspot.com",
    messagingSenderId: "1018691523688",
    appId: "1:1018691523688:web:084169a208af0605fa57dd",
    measurementId: "G-X0FBMP0LBV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;