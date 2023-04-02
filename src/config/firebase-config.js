// import * as firebase from 'firebase';
// import 'firebase/firestore'
// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// =============================
// import { getAuth,getApps, initializeAuth, getReactNativePersistence} from "firebase/auth/react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";


// =================================================
// import { initializeApp } from "firebase/app"
// import { initializeAuth } from "firebase/auth"
// import { getReactNativePersistence } from "firebase/auth/react-native"
// import AsyncStorage from "@react-native-async-storage/async-storage"
// ==============================================

const firebaseConfig = {
  apiKey: "AIzaSyB-QvxJrSAscWw-fFcdtasGXztl4Lj0pas",
  authDomain: "batch-12-2f53c.firebaseapp.com",
  projectId: "batch-12-2f53c",
  storageBucket: "batch-12-2f53c.appspot.com",
  messagingSenderId: "188971243560",
  appId: "1:188971243560:web:82d15a8f20bc214d3ebd1d"
};

// ================================
// const defaultApp = initializeApp(config);
// initializeAuth(defaultApp, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });
// ====================================

const firebaseApp = firebase.initializeApp(firebaseConfig);

// // ========================== auth 
// initializeAuth(firebaseApp, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

// let firebaseApp;
// if (getApps().length === 0) {
//   firebaseApp = initializeApp(firebaseConfig);
//   auth = initializeAuth(firebaseApp, {
//   persistence: getReactNativePersistence(AsyncStorage),
//   });

//   } else {
//     firebaseApp = getApp();
//     auth = getAuth(firebaseApp);
//   }



const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth, firebaseApp }




