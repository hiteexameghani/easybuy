import firebase from "firebase";

let config = {
  apiKey: "AIzaSyDSo_Z3WbOkRxFp3NuAzx8xbwTx_xTjgy0",
  authDomain: "cart-31f06.firebaseapp.com",
  databaseURL: "https://cart-31f06-default-rtdb.firebaseio.com",
  projectId: "cart-31f06",
  storageBucket: "cart-31f06.appspot.com",
  messagingSenderId: "848560328157",
  appId: "1:848560328157:web:c9ade233348f6578ccfa34",
  measurementId: "G-2807CF4XVF",
};
firebase.initializeApp(config);

export default firebase.database();
