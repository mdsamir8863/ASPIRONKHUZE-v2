// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCbeLN8neAhiYCvKMATkLXsPzdnNwquCkw",
//   authDomain: "ak-tech-5ce61.firebaseapp.com",
//   databaseURL:
//     "https://ak-tech-5ce61-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "ak-tech-5ce61",
//   storageBucket: "ak-tech-5ce61.appspot.com",
//   messagingSenderId: "635439696313",
//   appId: "1:635439696313:web:a7da835552ad15ed76ce68",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a reference to the Firebase Realtime Database
// var database = firebase.database();
// const my_form = document.getElementById("my_form");
// my_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // Get the email value
//   // document.getElementById("custom_spin").style.display = "flex";
//   const fname = document.getElementById("user_fname").value;
//   const lname = document.getElementById("user_lname").value;
//   const phone = document.getElementById("phone").value;
//   const email = document.getElementById("user_email").value;
//   const message = document.getElementById("user_message").value;
//   document.body.style.overflowY = "hidden";
//   const new_data = `the user name is ${fname} ${lname} the contact email is ${email}, contact number is ${phone} and the message was ${message}`;
//   // Create a new entry in the database
//   var newEntryRef = database.ref("data").push();
//   newEntryRef
//     .set({
//       data: new_data,
//     })
//     .then(() => {
//       console.log("Message sent to Firebase successfully!");
//       alert("message sent successfully!");
//       // document.getElementById("custom_spin").style.display = "none";
//       document.getElementById("user_fname").value = "";
//       document.getElementById("user_lname").value = "";
//       document.getElementById("phone").value = "";
//       document.getElementById("user_email").value = "";
//       document.getElementById("user_message").value = "";
//       document.body.style.overflowY = "scroll";
//       // Reset the form or show a success message
//     })
//     .catch((error) => {
//       console.error("Error sending email to Firebase:", error);
//       alert("Error while sending  !");
//       document.getElementById("main").style.visibility = "visible";
//       // document.getElementById("custom_spin").style.display = "none";
//       document.getElementById("user_fname").value = "";
//       document.getElementById("user_lname").value = "";
//       document.getElementById("user_email").value = "";
//       document.body.style.overflowY = "scroll";
//       document.getElementById("user_message").value = "";
//       // Handle error appropriately
//     });
// });

const firebaseConfig = {
//   apiKey: "AIzaSyBsq_xliutwKCgYsPeYaIrJ6lYrQV__kNg",
//   authDomain: "vishchat-3582b.firebaseapp.com",
//   databaseURL: "https://vishchat-3582b-default-rtdb.firebaseio.com",
//   projectId: "vishchat-3582b",
//   storageBucket: "vishchat-3582b.appspot.com",
//   messagingSenderId: "619928779337",
//   appId: "1:619928779337:web:19a356cde90f531947dd98",

    apiKey: "AIzaSyCbeLN8neAhiYCvKMATkLXsPzdnNwquCkw",
  authDomain: "ak-tech-5ce61.firebaseapp.com",
  databaseURL:
    "https://ak-tech-5ce61-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ak-tech-5ce61",
  storageBucket: "ak-tech-5ce61.appspot.com",
  messagingSenderId: "635439696313",
  appId: "1:635439696313:web:a7da835552ad15ed76ce68",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the Firebase Realtime Database
var database = firebase.database();
const my_form = document.getElementById("my_form");
my_form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get the email value
  const fname = document.getElementById("user_fname").value;
  const lname = document.getElementById("user_lname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("user_email").value;
  const message = document.getElementById("user_message").value;
  document.body.style.overflowY = "hidden";
  const new_data = `the user name is ${fname} ${lname} the contact email is ${email}, contact number is ${phone} and the message was ${message}`;
  console.log(new_data);
  // Create a new entry in the database
  var newEntryRef = database.ref("data").push();
  newEntryRef
    .set({
      data: new_data,
    })
    .then(() => {
      console.log("Message sent to Firebase successfully!");
      alert("message sent  successfully!");
      document.getElementById("user_fname").value = "";
      document.getElementById("user_lname").value = "";
      document.getElementById("user_email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("user_message").value = "";
      document.body.style.overflowY = "scroll";
      // Reset the form or show a success message
    })
    .catch((error) => {
      console.error("Error sending email to Firebase:", error);
      alert("Error while sending  !");
      document.getElementById("main").style.visibility = "visible";
      document.getElementById("user_fname").value = "";
      document.getElementById("user_lname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("user_email").value = "";
      document.getElementById("user_message").value = "";
      document.body.style.overflowY = "scroll";
      // Handle error appropriately
    });
});
