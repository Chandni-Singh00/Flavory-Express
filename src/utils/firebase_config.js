import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfk7XGKHULAmHpyGQ3qTJV2sxKCTnXy98",
    authDomain: "fooddelivapp-6c326.firebaseapp.com",
    databaseURL: "https://fooddelivapp-6c326-default-rtdb.firebaseio.com",
    projectId: "fooddelivapp-6c326",
    storageBucket: "fooddelivapp-6c326.appspot.com",
    messagingSenderId: "318153197846",
    appId: "1:318153197846:web:ddb2e163c844a5ceff2837",

  };

  const app=getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app)
  const storage=getStorage(app)


  export {app,firestore,storage};