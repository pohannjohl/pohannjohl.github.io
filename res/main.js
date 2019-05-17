var cookies= 0;
function click(){
	document.getElementById("bgsound").play();
	
	cookies= cookies +level;
	document.getElementById("morgen").innerHTML= cookies;
	localStorage.setItem("cookies",cookies);
	
	
	
	
	
}
function onlload(){
	var newcookies= parseInt(localStorage.getItem("cookies"));
	var newlevel= parseInt(localStorage.getItem("level"));
	if (!isNaN(newcookies)){
		 cookies=newcookies;	
	}
	if (!isNaN(newlevel)){
	level=newlevel;
	
	}
	document.getElementById("morgen").innerHTML=cookies;
	document.getElementById("level").innerHTML=level;
	
	
	
	
	document.getElementById("cookie").addEventListener("click", click);
}

var level= 1
function levelup(){
	if (cookies>=level*15){
		cookies= cookies-(level*15);

		level++; 
		localStorage.setItem("level",level);
		localStorage.setItem("cookies",cookies);
		
		if (level>20){
		document.getElementById("cool").src="res/anton.mp4";	
		}
	    
	
		document.getElementById("cool").currentTime=0;
		document.getElementById("cool").play();
		if (level>49){
			document.getElementById("cookie").src="res/level100.png";	
		}
		if (level>59){
		  document.getElementById("cookie").src="res/bild.png";	
			
		}
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;

	
}

