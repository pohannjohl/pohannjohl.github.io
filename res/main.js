var cookies= 0;
function click(){
	cookies= cookies +level;
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("bg").play();
	localStorage.setItem("cookies", cookies);

	
	
}
function onlload(){
	document.getElementById("cookie").addEventListener("click", click);
	var newcookies=parseInt(localStorage.getItem("cookies"));
	var newlevel=parseInt(localStorage.getItem("level"));
	if(newcookies!=NaN){
		cookies=newcookies;
	}
	if(newlevel!=NaN){
		level=newlevel;
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;
}



var level= 1
function levelup(){
	if (cookies>=level*15){
		cookies= cookies-(level*15);
	localStorage.setItem("level", level);
	level++; 
	document.getElementById("cool").currentTime=0;
	document.getElementById("cool").play();
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;

	
}



