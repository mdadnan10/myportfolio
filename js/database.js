// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOh4pKIJtGB14GdqdcpGC19_c4EL2wuJc",
    authDomain: "portfolio-a2802.firebaseapp.com",
    projectId: "portfolio-a2802",
    storageBucket: "portfolio-a2802.appspot.com",
    messagingSenderId: "557611245940",
    appId: "1:557611245940:web:35744e57b1aab942d84c21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference messages collection
  var messagesRef = firebase.firestore().collection("messages");

// listen for submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputValues('name');
    var contactInfo = getInputValues('contactInfo');
    var subject = getInputValues('subject');
    var message = getInputValues('message');
    var time = (new Date()).getTime();

    // save message
    saveMessage(name, contactInfo, subject, message, time);

    // show success message
    swal({
        title: "Thank you!",
        text: "Thank you for connecting, I will get back to you shortly.",
        icon: "success",
        button: "Done",
      });
}

// function to get form values
function getInputValues(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, contactInfo, subject, message, time){

    var newMessageRef = messagesRef.doc();

    newMessageRef.set({
        contactInfo : contactInfo,
        mId : newMessageRef.id,
        message : message,
        name : name,
        read : "unread",
        subject : subject,
        time : time
    })

}