var cookies= 0;
function click(){
	document.getElementById("bgsound").play();

	cookies= cookies +level;
	document.getElementById("morgen").innerHTML= cookies;
	localStorage.setItem("cookies",cookies);
}
var intervalid=0;
var autolevel=0;
function autoup(){
		if (cookies>=autolevel*1000+1000){
				cookies=cookies-(autolevel*1000+1000);
				  autolevel++;
					localStorage.setItem("autolevel",autolevel);
					localStorage.setItem("cookies",cookies);
					if (autolevel>0){
          	window.clearInterval(intervalid);
						intervalid=window.setInterval(function(){click();},10000/autolevel);

					}else{
							window.clearInterval(intervalid);
					}
		}
		document.getElementById("autolevel").innerHTML=autolevel;
    document.getElementById("morgen").innerHTML=cookies;
}
function onlload(){
	var newcookies= parseInt(localStorage.getItem("cookies"));
	var newlevel= parseInt(localStorage.getItem("level"));
	var osterhase= parseInt(localStorage.getItem("autolevel"));
	if(!isNaN(osterhase)){
			autolevel=osterhase;
	}


	if (!isNaN(newcookies)){
		 cookies=newcookies;
	}
	if (!isNaN(newlevel)){
	level=newlevel;

	}
	document.getElementById("morgen").innerHTML=cookies;
	document.getElementById("level").innerHTML=level;
	document.getElementById("autolevel").innerHTML=autolevel;
	if (autolevel>0){
		window.clearInterval(intervalid);
		intervalid=window.setInterval(function(){click();},10000/autolevel);
	}


	document.getElementById("cookie").addEventListener("click", click);
}

var level= 1;
function levelup(){
	if (cookies>=level*15){
		cookies= cookies-(level*15);

		level++;
		localStorage.setItem("level",level);
		localStorage.setItem("cookies",cookies);

		if (level>9){
		document.getElementById("cool").src="res/juhu.mp4";
		}
		if (level>18){
		document.getElementById("cool").src="res/werbung.mp4";

		}
		if (level>19){
		document.getElementById("cool").src="res/anton.mp4";
		}
	    if (level>29){
			document.getElementById("cool").src="res/ojear.mp4";
		}
	    if (level>39){
		document.getElementById("cool").src="res/antoon.mp4";
		}
		if (level>49){
		document.getElementById("cool").src="res/min.mp4";
		}

		document.getElementById("cool").currentTime=0;
		document.getElementById("cool").play();

		if (level>49){
			document.getElementById("cookie").src="res/level100.png";
		}
		if (level>59){
		  document.getElementById("cookie").src="res/bild.png";
			}



	 if (level>69){
	document.getElementById("cookie").src="res/smyli.png";
	}
	if (level>79){
	document.getElementById("cookie").src="res/lila.png";
	}
	if (level>89){
	document.getElementById("cookie").src="res/grün.png";
	}
	}
	document.getElementById("morgen").innerHTML= cookies;
	document.getElementById("level").innerHTML= level;


}
