import firebase  from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBYdxz_qqx4AjTsVPzOARmGk_sOiZD16L0",
    authDomain: "wilyapp-2812c.firebaseapp.com",
    projectId: "wilyapp-2812c",
    storageBucket: "wilyapp-2812c.appspot.com",
    messagingSenderId: "259798145703",
    appId: "1:259798145703:web:e6de10289178accdcc1982"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()