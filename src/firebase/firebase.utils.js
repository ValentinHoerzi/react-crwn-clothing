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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.log('error creating user', error.message)
        }
    }else{
        console.log(`User with ID ${userAuth.uid} already exists!`)
    }

    return userRef;
}



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;