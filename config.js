const firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyDG7Svj2saYS0xU4uFn4E61TWR-VaRlCGA",
  authDomain: "cout-1aef5.firebaseapp.com",
  databaseURL: "https://cout-1aef5.firebaseio.com",
  projectId: "cout-1aef5",
  storageBucket: "cout-1aef5.appspot.com",
  messagingSenderId: "888028794428",
  appId: "1:888028794428:web:5fef2ffe070128e749fd39",
};

firebase.initializeApp(firebaseConfig);
const fire = firebase.default.firestore();
const auth = firebase.default.auth();
module.exports = { fire ,auth};
