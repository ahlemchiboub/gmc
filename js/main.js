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