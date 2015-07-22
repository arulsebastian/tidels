//var httpPath = "http://localhost:8082/tidels/";
var httpPath = "http://52.11.212.236:8082/tidels/";
//	var httpPath = "http://www.bread--crumbs.com/tidels/"
var	isLogout=false;

function viewTab(id){
    if (id==1) window.location= httpPath+"#/";
    else if (id==2) window.location=httpPath+"placesvisited#/";
    else if (id==3) window.location=httpPath+"locationstimespent#/";
    else if (id==4) window.location=httpPath+"driving#/";
}


