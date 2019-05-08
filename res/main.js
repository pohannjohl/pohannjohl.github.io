cookies= 0;
function click(){
	cookies= cookies +1;
	document.getElementById("cookiecounter").innerHTML= cookies;
	
	
	
	
}
function onlload(){
	
	document.getElementById("cookie").addEventListener("click", click);
}