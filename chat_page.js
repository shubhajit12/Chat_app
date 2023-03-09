//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAGBnHG7lUXgnWCu0A1WCFUJGpPb-ifrMU",
    authDomain: "kwitter-533a7.firebaseapp.com",
    databaseURL: "https://kwitter-533a7-default-rtdb.firebaseio.com",
    projectId: "kwitter-533a7",
    storageBucket: "kwitter-533a7.appspot.com",
    messagingSenderId: "529715734027",
    appId: "1:529715734027:web:01a9cfc9a3617a7166090e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("roomname");

  function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        likes:0
    });
    document.getElementById("message").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();