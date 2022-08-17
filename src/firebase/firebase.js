import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDwvknCa_z2LxpndDo3x_fKgii233K3iQ",
  authDomain: "triphouse-b6d59.firebaseapp.com",
  projectId: "triphouse-b6d59",
  storageBucket: "triphouse-b6d59.appspot.com",
  messagingSenderId: "843324994976",
  appId: "1:843324994976:web:badab70cdf5380317660c5",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export default firebase;
