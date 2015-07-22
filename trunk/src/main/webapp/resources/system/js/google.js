
        var profile, email;
        
        function google_signout(){
        	gapi.auth.signOut();
        	window.location = "http://localhost:8080/tidels/";
        }
        
        	
        function handleAuthResult(authResult) {
            if (authResult) {
                if (authResult['error'] == undefined){
                    gapi.client.load('plus','v1', loadProfile);  // Trigger request to get the email address.
                    hidePopup();
                } else {
                    console.log('An error occurred');
                }
            } else {
                console.log('Empty authResult');  // Something went wrong
            }
        }

        /**
         * Uses the JavaScript API to request the user's profile, which includes
         * their basic information.
         */ 
        function loadProfile(){
            var request = gapi.client.plus.people.get( {'userId' : 'me'} );
            request.execute(loadProfileCallback);
        }

        function loadProfileCallback(obj) {
            profile = obj;
            email = obj['emails'].filter(function(v) {
                return v.type === 'account'; // Filter out the primary email
            })[0].value; // get the email from the filtered results, should always be defined.
            $('#name').html(email);
            document.getElementById('login').innerHTML =
    	        'Welcome ' + profile.displayName + '!   <a href="javascript:google_signout();">LOGOUT</a>';
        }

function initiateSignIn() {
//   var myParams = {
//     'clientid' : '1015475950714-vo609cmpvabhcb4a9qt92valvairu9s5.apps.googleusercontent.com',
//     'cookiepolicy' : 'single_host_origin',
//     'callback' : 'handleAuthResult',
//     'scope' : 'https://www.googleapis.com/auth/plus.profile',
//     'requestvisibleactions' : 'http://schema.org/AddAction'
//     // Additional parameters
//   };

  var myParams = {
		    'client_id' : '1015475950714-vo609cmpvabhcb4a9qt92valvairu9s5.apps.googleusercontent.com',
		    'immediate' : 'false',
		    'response_type' : 'token',
		    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email'
		    // Additional parameters
		  };

  //gapi.auth.signIn(myParams);
  gapi.auth.authorize(myParams, handleAuthResult);
}



function disconnectUser(access_token) {
	access_token='4/ALuymgpXdIH5gTdkVhPe12537b9GLblBxa2WH6Uxoj8.EkfuESFCKSoToiIBeO6P2m_6NC9ClgI';
  var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' +
      access_token;
  // Perform an asynchronous GET request.
  $.ajax({
    type: 'GET',
    url: revokeUrl,
    async: false,
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(nullResponse) {
      // Do something now that user is disconnected
      // The response is always undefined.
    },
    error: function(e) {
      // Handle the error
      // console.log(e);
      // You could point users to manually disconnect if unsuccessful
      // https://plus.google.com/apps
    }
  });
}
// Could trigger the disconnect on a button click
$('#revokeButton').click(disconnectUser);

//disconnectUser('');
