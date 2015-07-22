var httpPath = "http://localhost:8082/tidels/";
//var httpPath = "http://52.11.212.236/tidels/";
	//var httpPath = "http://www.bread--crumbs.com/tidels/"

var httpPathWS = "http://localhost:8080/";

	var	isLogout=false;

	function viewTab(id){
    if (id==1) window.location= httpPath+"#/";
    else if (id==2){
		var todaystr = new Date();
		var dd = todaystr.getDate();
		var mm = todaystr.getMonth()+1; //January is 0!
		var yyyy = todaystr.getFullYear();

		if(dd<10) {
		    dd='0'+dd
		} 

		if(mm<10) {
		    mm='0'+mm
		} 

		todaystr = yyyy+mm+dd;

    	window.location=httpPath+"#/placesvisitedsummary/"+todaystr+"/today/dash";
    }
    else if (id==3) window.location=httpPath+"locationstimespent#/";
    else if (id==4) window.location=httpPath+"driving#/";
}


