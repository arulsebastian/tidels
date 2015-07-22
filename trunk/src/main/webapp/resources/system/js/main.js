var DEBUG_MODE_ALERT = false;
var TAB_ELE_LIST;


$(document).click(function(e) {
    $('#dropNav1,#dropNav2').slideUp('fast');
});
    
$(document).ready(function () {	
	$('#headerDropNav').click(function(e) {
		e.stopPropagation();
        $('#dropNav1').slideToggle('fast');
    });
	$('#headerIconNav').click(function(e) {
		e.stopPropagation();
        $('#dropNav2').slideToggle('fast');
    });
	$(".activity-btn").click(function(){
	 $(".hm-top").slideDown(400);
	 $(".close-btn").show();
	}); 
	 $(".close-btn").click(function(){
		$(".hm-top").slideUp(400);
		$(".close-btn").hide();
	  });
   
  //$(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({allow_single_deselect:true});  
			
	// **************************************************************

	/*$('#leftMenu').hover(function(e) {
        $('.left_nav').animate({
      		width: "215px"
    	},400);
		$('.content_wrapper').animate({
      		left: "215px",
			width:"88%"
    	},400);
		$('#leftMenu .menuToggler span').delay(200).fadeIn(500);
    });*/
//******
	
	/*$(document).mouseup(function (e)
		{
    var container = $(".left_nav");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {	
		$('#leftMenu .menuToggler span').delay(200).fadeOut(300);
		$('#leftMenu .menuToggler ul').hide('blind',300);
        container.delay(400).animate({
      		width: "55px"
    	},300);
		$('.content_wrapper').delay(400).animate({
      		left: "3%",
			width:"97%"
    	},400);
		
    }
});*/
//*********

	
	$('.left_nav ul li').click(function(e) {
    	$(e.target).parent().siblings().find("ul").slideUp("normal");
        $(e.target).next('ul').slideToggle();
		});
	


    //$(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({allow_single_deselect:true});
	
	
	// Main menu
	

		if(jQuery().notify){
			initGrowlNotify();
		}
		
		// autorun
		setInterval(function(){
			//getOnlineAvalableUsers();
		},18000);

});

var timeout = null;

$(window).scroll(function(e) {

    clearTimeout(timeout);
    timeout = setTimeout(function() {
 
		if($(this).scrollTop()>30){
			$("#nav").animate({top:"-10px"}),350;
			//$("#nav").animate({top:$(this).scrollTop()-10+"px"},350);
		}else{
			$("#nav").animate({top:"75px"},350);
		}
 
    }, 150);



});

function checkLastIntSeoKeyword(values){
    var temp_arr = values.split("-");  // ok
    var endchar = temp_arr[temp_arr.length-1];
    if(/^\d+$/.test(endchar)){ alert("sss");
       return values = values+"-new";
    }else {
	   return values;
    }
}

function setSeoUrl(values,controller,dataFunction,textfield){
      var seo_url = values.replace(/[^a-zA-Z-0-9]+/g, '-').toLowerCase();
      seo_url = checkLastIntSeoKeyword(seo_url);
      $.post(http_path+controller+"/"+dataFunction,{values:seo_url},function(data){
			if(data=='true'){								
				document.getElementById(textfield).value=seo_url;
			}else{
				document.getElementById(textfield).value=seo_url+"-new";
			}
	  });	
}

function setSeoUrlEdit(id,values,controller,dataFunction,textfield){
      var seo_url=values.replace(/[^a-zA-Z-0-9]+/g, '-').toLowerCase();
      seo_url=checkLastIntSeoKeyword(seo_url);
      $.post(http_path+controller+"/"+dataFunction,{id:id,values:seo_url},function(data){
			if(data=='true'){								
				document.getElementById(textfield).value=seo_url;
			}else {
				document.getElementById(textfield).value=seo_url+"-1";
			}
	  });	
}

// Fill text fields with default
function fillDefaultText(el){

	if(el.title == el.value){
			el.value = "";
			$(el).css("font-style","");			
		}else if(el.value==""){
			el.value = el.title;
			$(el).css("font-style","italic");
		}

}

function clearDefaultText(el){

	if(el.title == el.value){
			el.value = "";			
			$(el).css("font-style","");
		}

}

function putDefaultText(el){

		if(el.value==""){
			el.value = el.title;
			$(el).css("font-style","italic");
		}

}

function initTabs(){

	TAB_ELE_LIST = new Array();

	$('.tab_me').each(function(i){
		$("#tab_"+$(this).attr('id')).addClass("tab_all");
		TAB_ELE_LIST.push( "tab_"+$(this).attr('id') );
	});

	$(".tab_me:first").addClass("tab_selected");

	$('.tab_me').click(function(){
		$(".tab_all").hide();
		$('.tab_me').removeClass("tab_selected");
		$(this).addClass("tab_selected");
		$("#tab_"+$(this).attr('id')).fadeIn();
	});

	$('.tab_next').click(function(){

		$('.tab_me').removeClass("tab_selected");
		$("#"+TAB_ELE_LIST[parseInt($(this).attr("title"))+1].replace("tab_","")).addClass("tab_selected");		
		$(".tab_all").hide();
		$("#"+TAB_ELE_LIST[parseInt($(this).attr("title"))+1]).show();

	});

	$('.tab_back').click(function(){

		$('.tab_me').removeClass("tab_selected");
		$("#"+TAB_ELE_LIST[parseInt($(this).attr("title"))-1].replace("tab_","")).addClass("tab_selected");		
		$(".tab_all").hide();
		$("#"+TAB_ELE_LIST[parseInt($(this).attr("title"))-1]).show();

	});

}




function showErrorMessage(message){

	$(".ret_message").html(message);
	$(".ret_message").removeClass("success-messege");
	$(".ret_message").removeClass("info-messege");
	$(".ret_message").addClass("error-messege");
	setTimeout(function(){ $(".ret_message").slideUp() },2500);
	/*$(".ret_message").stop().slideDown("slow",function(){
		//scrollToObject($(".ret_message"),500,"");
		setTimeout(function(){ $(".ret_message").slideUp() },2500);
	});*/

}

function showSuccessMessage(message){
	$(".ret_message").html(message);
	$(".ret_message").removeClass("error-messege");
	$(".ret_message").removeClass("info-messege");
	$(".ret_message").addClass("success-messege");
	
		//scrollToObject($(".ret_message"),500,"");
		setTimeout(function(){ $(".ret_message").slideUp() },2500);
	

}
function showInfoMessage(){

	$(".ret_message").html("Processing Please Wait....");
	$(".ret_message").removeClass("error-messege");
	$(".ret_message").removeClass("success-messege");
	$(".ret_message").addClass("info-messege");
	$(".ret_message").stop().slideDown("slow");

}


function displayLoader(class_e){
	$(class_e).html('<center class="gif"><img src="'+ajax_loader+'" /></center>');
}

function hideLoader(class_e){
	$(class_e).html('');
}

function displayMiniLoader(class_e){
	$(class_e).html('<center class="gif"><img src="'+ajax_loader_mini+'" /></center>');
}

function hideMiniLoader(class_e){
	$(class_e).html('');
}

function doJSValidationSendData(){

	var error_ids = new Array();
	var error_tabs = new Array();
	var error_type;
 
	$('.send_data').each(function(index) {

		// blank validation
		if( $(this).hasClass("required") ){
			
			if(this.title == this.value){
				error_ids.push(this.id);
				error_type = "empty";
			}


		}else if( $(this).hasClass("validate_email") ){

			   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			   var address = $(this).val();
			   if(reg.test(address) == false) {			 
				  error_ids.push(this.id);
				  error_type = "email";
			   }		

		}

	
	});

	$(".input_error_border").removeClass("input_error_border");

	if(error_ids.length<1){
		// validation passed
		return true;
	}else{

		// show errors
		for(er=0; er<error_ids.length; er++){
			$("#"+error_ids[er]).addClass("input_error_border");
			
			/*$("#"+error_ids[er]).wiggle({
					waggle : 50,
					duration : 1,
					interval : 120, 
					wiggleCallback : function (elem) {
					   
					}
				});*/	

			error_tabs.push( $("#"+error_ids[er]).parents("div").filter(function() {
        		return this.id.match('tab_?');
    		}).attr("id") );

		}

		$("input.input_error_border").keydown(function(){
			$(this).removeClass("input_error_border");
		});

		// show errors on tabs
		$.unique(error_tabs);
	
		if(error_tabs.length<0){
	
			for(er=0; er<error_tabs.length; er++){
				
				$("#"+error_tabs[er].replace("tab_","")).addClass("input_error_border");
					
			}
		
		}

		//display_error_messages
		if(error_type=="empty"){
			//showErrorMessage("Marked field(s) are required");
			showErrorMessage("Les champs marqués sont obligatoires");
		}else if(error_type=="email"){
			//showErrorMessage("Invalid email, please re-check");
			showErrorMessage("Email invalide, veuillez vérifiez");
		}

		return false;
	}

}

function showErrorsForCustomElements(error_ids){

	var error_tabs = new Array();

		for(er=0; er<=error_ids.length; er++){
			$("#"+error_ids[er]).addClass("input_error_border");
			
			error_tabs.push( $("#"+error_ids[er]).parents("div").filter(function() {
        		return this.id.match('tab_?');
    		}).attr("id") );
						
		}

		$("input.input_error_border").keydown(function(){
			$(this).removeClass("input_error_border");
		});

		// show errors on tabs
		$.unique(error_tabs);

		for(er=0; er<=error_tabs.length; er++){

			$("#"+error_tabs[er].replace("tab_","")).addClass("input_error_border");	

		}		


}

function setPageHash(page){
	window.location.hash = page;
}

function getPageHash(){

	var temp_hash = window.location.hash;
	val = temp_hash.replace("#","");
	if(val==""){
		return 1;
	}else{
		return val;
	}

}

function showPopup(){
		popupLoader();
		$("#popup").height($(document).height());
		$("#popup").fadeIn(1000);
}

function popupLoader(){
		//$(".popup-window").css({marginLeft : '-10%' });
		$(".popup-window" ).html('<center><img style="margin-top:50px" src="'+ajax_loader+'" /></center>');
}

function loadPopup(data){
	$(".popup-window").html(data);
    $('html,body').animate({ scrollTop: $('#popupSet').offset().top }, { duration: 'slow' });
	//$(".popup-window").css({marginLeft : ($(".popup-window").width()/2)*-1 });

	//alert( $(".popup-window").width() );
}

function hidePopup(){
		$("#popup").fadeOut(1000);	
}

function showConfirmDialog(title,message,yesbtn,nobtn,yescallback,nocallback){

	loadData("",http_path+"HTML_Blocks/confirm-box.html",function(data){

	  var row_data = [{ title: title,
		  yesbtn: yesbtn,
		  nobtn: nobtn,
		  message: message,
		  yesonclick: yescallback+'(1);hidePopup()',
		  noonclick: nocallback+'(0);hidePopup()'
		   }];

		showPopup();
		loadPopup( $.tmpl( data, row_data).html() );

	});

}

function showAlertDialog(title,message,okbtn,okonlick){

	loadData("",http_path+"HTML_Blocks/alert-box.html",function(data){

	  var row_data = [{ title: title,
		  okbtn: okbtn,
		  message: message,
		  okonlick:okonlick+'(1);hidePopup()',
		   }];

		showPopup();
		loadPopup( $.tmpl( data, row_data).html() );

	});

}

function in_array(arr,val){

	var _return = false;

	for(ia=0; ia<arr.length; ia++){		
		if(arr[ia]==val){
			_return = true;
		}
	}

	return _return;

}

function scrollToElement(ele){
    $('html,body').animate({ scrollTop: $("#"+ele).offset().top }, { duration: 'slow' });

}

function scrollToObject(ele,time,callback){

	$('html, body').animate({scrollTop: $(ele).offset().top}, time,callback);

}


function sendAjax(action,path,callback){
         displayMiniLoader(".loader_on_topic");
         var dataURL = "action=" + action;
         $('.send_data').each(function(index) {

		// clear default text		
		clearDefaultText(this);	
         if( $(this).hasClass("send_group") ){
              var temp_arr = new Array();
                   $("input[name='"+$(this).attr("id")+"']").each(function(index) {
					    
                      if($(this).attr("type")=="text"){
								temp_arr.push( $(this).val() );
								
					}else{
						if( $(this).attr("checked") != "undefined" && $(this).attr("checked") == "checked" ){
                          
								temp_arr.push( 10 );

						}

					}

				});

			dataURL += "&"+$(this).attr("id")+"="+ temp_arr.join(":");

		}else{
			
			 if($(this).attr("type")=="checkbox"){
				          if( $(this).attr("checked") == "checked" ){
										dataURL += "&"+$(this).attr("id")+"="+ 1;
								}else{
										dataURL += "&"+$(this).attr("id")+"="+ 0;
					}
				 
			 }else {
                 dataURL += "&"+$(this).attr("id")+"="+ encodeURIComponent($(this).val());
			 }
						

		}
		// put default text back
		putDefaultText(this);

	});
	
	$(".send_dataHTMLEditer").each(function(index, element) {
          dataURL += "&"+$(element).attr("id")+"="+encodeURIComponent(nicEditors.findEditor(element).getContent());
		          
    });
	$.post(path,dataURL,function(res)
		{  
		if(DEBUG_MODE_ALERT==true){
								alert(res);
							}

							hideMiniLoader(".loader_on_topic");

							callback(res);	
							
							
		});

					/*$.ajax({
					   type: "GET",  
					   url: path,  
					   data: dataURL,  
					   success: function(res){ 

							if(DEBUG_MODE_ALERT==true){
								alert(res);
							}

							hideMiniLoader(".loader_on_topic");

							var obj = jQuery.parseJSON(res);

							if(obj.code==200){
								showSuccessMessage(obj.msg);
								callback(obj);						
							}else if(obj.code==201){
								showSuccessMessage(obj.msg)								
							}else if(obj.code==202){
								callback(obj);							
							}else if(obj.code==400){							
								showErrorMessage(obj.msg);
							}else if(obj.code==303){
								showErrorMessage(obj.msg);
								showErrorsForCustomElements(obj.els);
							}

					   }
				 });*/

}

function loadData(action,path,callback){

					$.ajax({
					   type: "GET",  
					   url: path,
					   data: "action="+action,
					   success: function(res){ 

							if(DEBUG_MODE_ALERT==true){
								alert(res);
							}

						callback(res);	

					   }
				 });

}

function number_format (number, decimals, dec_point, thousands_sep) {

var n = number, prec = decimals;

var toFixedFix = function (n,prec) {
    var k = Math.pow(10,prec);
    return (Math.round(n*k)/k).toString();
};

n = !isFinite(+n) ? 0 : +n;
prec = !isFinite(+prec) ? 0 : Math.abs(prec);
var sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep;
var dec = (typeof dec_point === 'undefined') ? '.' : dec_point;

var s = (prec > 0) ? toFixedFix(n, prec) : toFixedFix(Math.round(n), prec); //fix for IE parseFloat(0.55).toFixed(0) = 0;

var abs = toFixedFix(Math.abs(n), prec);
var _, i;

if (abs >= 1000) {
    _ = abs.split(/\D/);
    i = _[0].length % 3 || 3;

    _[0] = s.slice(0,i + (n < 0)) +
          _[0].slice(i).replace(/(\d{3})/g, sep+'$1');
    s = _.join(dec);
} else {
    s = s.replace('.', dec);
}

var decPos = s.indexOf(dec);
if (prec >= 1 && decPos !== -1 && (s.length-decPos-1) < prec) {
    s += new Array(prec-(s.length-decPos-1)).join(0)+'0';
}
else if (prec >= 1 && decPos === -1) {
    s += dec+new Array(prec).join(0)+'0';
}
return s; }


function initGrowlNotify(){

	$("#growl_notify").notify({
		stack: "above",		
		speed: 500,
		expires: false,
	});

}

function showGrowlNotify(title,text){

		$("#growl_notify").notify("create", {
			title: title,
			text: text,
		});

}

var typewatch = function(){
    var timer = 0;
    return function(callback){
        clearTimeout (timer);
        timer = setTimeout(callback, 250);
    }  
}();

