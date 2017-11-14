
var colour = "";
var rval = "";
var gval = "";
var bval = "";

document.getElementById("btn1").addEventListener("click", formChange); // listens for the Submit button click and fires the function formChange


function formChange(){
	rval = document.getElementById("rval").value; // gets the red value from the form input
	gval = document.getElementById("gval").value; // gets the green value from the form input
	bval = document.getElementById("bval").value; // gets the blue value from the form input
	colour = 'rgb' + '\(' + rval + ', ' + gval + ', ' + bval +'\)'; // creates a css compatible color string in this pattern rgb(255, 255, 255,) and assigns it to var colour
	document.getElementById("cbox").style.backgroundColor = colour; // applies the css "background-color:" property
}

 
