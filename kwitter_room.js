
const firebaseConfig = {
      apiKey: "AIzaSyDB2-GzbIzXk58nb1hp5YpEDnz_8ONYxQ4",
      authDomain: "let-s-chat-1-1b215.firebaseapp.com",
      databaseURL: "https://let-s-chat-1-1b215-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-1-1b215",
      storageBucket: "let-s-chat-1-1b215.appspot.com",
      messagingSenderId: "340328789849",
      appId: "1:340328789849:web:95de82d5a10161b07f3e48"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name - localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"";

function add_room(){
      room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname", room_name);

    window.location="kwitter_page.html";

    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
