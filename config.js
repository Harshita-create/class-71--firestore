import * as firebase from 'firebase'
 require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD639v31V_FhOUicWbrc1QtmHNohx3nZ_8",
    authDomain: "wily-50d7f.firebaseapp.com",
    projectId: "wily-50d7f",
    storageBucket: "wily-50d7f.appspot.com",
    messagingSenderId: "1005348128335",
    appId: "1:1005348128335:web:b0dacc309e3a80746e8c3a"
  };

  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore();