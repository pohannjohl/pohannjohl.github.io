var cookies= 0;
function click(){
	cookies= cookies +level;
	document.getElementById("morgen").innerHTML= cookies;
	
	
	
	
}
function onlload(){
	
	document.getElementById("cookie").addEventListener("click", click);
}

var level= 1
function levelup(){
	if (cookies>=level*15){
		cookies= cookies-(level*15);

	level++;
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;

	
}

