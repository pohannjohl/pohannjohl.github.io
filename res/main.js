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
	if(!isNaN(newcookies)){
		cookies=newcookies;
	}
	if(!isNaN(newlevel)){
		level=newlevel;
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;
}



var level= 1
function levelup(){
	if (cookies>=level*15){
		cookies= cookies-(level*15);
		level++; 
		localStorage.setItem("level", level);
		localStorage.setItem("cookies", cookies);
		document.getElementById("cool").currentTime=0;
		document.getElementById("cool").play();
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;

	
}



