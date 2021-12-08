import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyANN8iV31jZtrf71JdNG48_GwxopUJ9jjE',
    authDomain: 'chatapp-331a2.firebaseapp.com',
    projectId: 'chatapp-331a2',
    storageBucket: 'chatapp-331a2.appspot.com',
    messagingSenderId: '747423033921',
    appId: '1:747423033921:web:5769b233f26a600eb0f4c0',
  })
  .auth();
