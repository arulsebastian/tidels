function initBasicRegistration(){
    
    $('input[alt!=""]').hint();
	$("#registration").validate({
				  rules: {
					email_address: {
					  remote: {
					  url: http_path+"system/controllers/login-controller.php",
					  type: "post",
					  data: {action: function(){ return "isEmailExsists"; }},
					  },
					  },
					},
				   messages: {
					 email_address: {
					  remote: "This email address already exists"
					  },
					},
		    submitHandler: function() { registration(); }
	  });
    
    
 
}

function registration(){
	showInfoMessage();
	var reg_type = $('input[name=reg_type]:checked','#registration').val();
    sendAjax("registration&reg_type="+reg_type,http_path+"system/controllers/company-controller.php",function(res){
	     var obj = jQuery.parseJSON(res);
         if(obj.code==200){
	        showSuccessMessage(obj.msg);
			if(reg_type=="1"){
	            setTimeout(function(){window.location = http_path+"company/registration.php"},2000);
			}else {
				setTimeout(function(){window.location = http_path+"resume/account.php"},2000);
			}
         }else{
	        showErrorMessage(obj.msg);
         }
	});	
}


function loadLoginPopup(){
	    window.location = "#/login";
	    showPopup();
		 loadData("loginpopup",http_path+"resources/partials/login.html",function(res){
			loadPopup(res);		});
}

function loadRegisterPopup(){
    
        showPopup();
       loadData("loginpopup",http_path+"client/regpopup",function(res){
			loadPopup(res);
		});

}

function viewCompanyIndexById(id){
    displayLoader("#AJAX_LODE_HEAR");
	loadData("viewIndexFromId&id="+id,http_path+"ajax-pages/view-company.php",function(res){//alert(res);
		$("#AJAX_LODE_HEAR").html(res);
	});
}
function setMainCatBySearch(id){
	document.getElementById("course_category_serach_val").value = id;
    $("#searchForm").submit();
}
