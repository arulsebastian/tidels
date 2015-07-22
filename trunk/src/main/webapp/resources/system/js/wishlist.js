function onlodeWishlist(){
        
}

function addToWishlist(id){
    showInfoMessage();
    sendAjax("addToWishlist&id="+id,http_path+"wishlist/addToWishlist",function(res){
         var obj = jQuery.parseJSON(res);
         if(obj.msg=='1'){
			 $('#wish_'+id).addClass("featured");
             setTimeout(function(){hidePopup();},2000);
             //setTimeout(function(){hidePopup(); window.location = http_path+"wishlist/view";},3000);
		 }else if(obj.msg=='3'){
             showPopup();
             popupLoader();
             loadPopup('<div class="order-popup-header">&nbsp;<div style="float:right;cursor:pointer;" onclick="hidePopup()">X</div></div><div class="error-messege">This item already have your wishlist.</div>');
             //setTimeout(function(){hidePopup();},2000);
		 }else if(obj.msg=='4'){
             showPopup();
             popupLoader();
             loadPopup('<div class="order-popup-header">&nbsp;<div style="float:right;cursor:pointer;" onclick="hidePopup()">X</div></div><div class="error-messege">Please Login Before Add Item to Wishlist</div>');
             //setTimeout(function(){hidePopup();},2000);
		 }else if(obj.msg=='2'){
              showPopup();
             popupLoader();
             loadPopup('<div class="order-popup-header">&nbsp;<div style="float:right;cursor:pointer;" onclick="hidePopup()">X</div></div><div class="error-messege">Error Add Item to Wishlist ... , Pleasetry again</div>');
		 }			 
	});
}


function deleteWishlistItem(id){
    var message='#message';

    var message='#message';
	jConfirm('Are you sure?', 'Delete Item From Wishlist', function(r) {
		if(r){
		 loadData("deleteWishlistItem"+"&id="+id,http_path+"wishlist/deleteWishlistItem",function(res){
			if(res==1){
					$("#deleteWishlistItem"+id).fadeOut("slow",function(){ $("#deleteWishlistItem"+id).remove() });
			}else{
					$(message).html("Item Delete Error.").removeClass().addClass('error-messege').fadeIn("slow");
			}
		 });	
		}
        
	});
}

function viewMyWishlist(page){
    displayLoader(".ajax_load_here");
    loadData("view&page="+page,http_path+"wishlist/viewMyWishlist",function(res){
		$(".ajax_load_here").html(res);
    });
}