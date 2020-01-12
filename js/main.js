/*	var myString="hello"; 
	var secondString="world"; 
	alert(myString.toLowerCase()); 
	alert(secondString.toUpperCase()); 

	var myString="Hello There,This is a split test"; 
	var parts=myString.split(","); 
	alert(parts); 


 
 var getId=document.getElementById("myPara").innerHTML; 

 var getClass=document.getElementByClassName("Tracks"); 

 var getParagraph=document.getElementByClassName("p"); 

 console.log(getId); 
 console.log(getClass); 
 console.log(getParagraph);
*/

$(".c1").hover( 
	function () {
		$(".course1").toggleClass('course1Hover');
	  }
);   

$(".c2").hover( 
	function () {
		$(".course2").toggleClass('course2Hover');
	  }
);    

$(".c3").hover( 
	function () {
		$(".course3").toggleClass('course3Hover');
	  }
);
$('.course1').click(function(event) {
	event.preventDefault();
	$(".modal").modal('show');
  });
  
  $('.course2').click(function(event) {
	event.preventDefault();
	$(".modal").modal('show');
  });  
  $('.course3').click(function(event) {
	event.preventDefault();
	$(".modal").modal('show');
  });

  var firebaseConfig = {
    apiKey: "AIzaSyCrd0J3IKpuyxmUMhTNPlv8beLqNtobhG0",
    authDomain: "glamour-e0d55.firebaseapp.com",
    databaseURL: "https://glamour-e0d55.firebaseio.com",
    projectId: "glamour-e0d55",
    storageBucket: "glamour-e0d55.appspot.com",
    messagingSenderId: "1088349208858",
    appId: "1:1088349208858:web:40c72992658907863c6ca3",
    measurementId: "G-1YKTG463YT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var messagesref= firebase.database().ref('myDatabase');   
   function submitform(e){  
	   e.preventDefault();  
	   var name=document.getElementById('name').Value; 
	   var track=document.getElementById('track').value; 
	   var email=document.getElementById('email').value; 
	   var phone=document.getElementById('phone').value;  
	   saveMessage(name,track,email,phone);

   }     

   document.getElementById('contactform') addEventlistener('submit',submitform);
   function saveMessage(name,track,email,phone);{ 
   var newMessageRef=messagesRef.push(); 
   newMessageRef.set({  
	   name:name, 
	   tack:track, 
	   email:email,
	   phone:phone, 
   }); 
   }