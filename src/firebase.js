import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyChliOPQLgFcZ-svaUxOyC1PAm22lmJDVA",
    authDomain: "falkiepalkie0210801945.firebaseapp.com",
    projectId: "falkiepalkie0210801945",
    storageBucket: "falkiepalkie0210801945.appspot.com",
    messagingSenderId: "1021110793027",
    appId: "1:1021110793027:web:932a39fd98787a863375f6",
    measurementId: "G-MXVZH4GNFB"
};

const fbApp = initializeApp(firebaseConfig);

export const db = getFirestore(fbApp);
export const auth = getAuth(fbApp);
export const storage = getStorage(fbApp);
