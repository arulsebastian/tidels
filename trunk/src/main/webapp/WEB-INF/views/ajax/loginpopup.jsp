  <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

  <script src="resouces/lib/angular/angular.min.js"></script>
  <script src="resouces/lib/angular/angular-route.min.js"></script>
  <script src="resouces/js/app.js"></script>
  <script src="resouces/js/services.js"></script>
  <script src="resouces/js/controllers.js"></script>
  <script src="resouces/js/filters.js"></script>
  <script src="resouces/js/directives.js"></script>

  <script src="https://app.userapp.io/js/userapp.client.js"></script>
  <script src="https://app.userapp.io/js/angularjs.userapp.js"></script>

<img src="resources/theme_skin/images/close.png" onclick='hidePopup();' align='right'>
<form class="form" ua-login>
  <h2 class="form-heading">Please Log In</h2>
  <div class="form-fields">
    <input name="login" placeholder="Email" type="text" class="form-control">
		<input name="password" placeholder="Password" type="password" class="form-control">
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit" ng-disabled="loading">
		<span ng-show="!loading">Log In</span>
		<!-- <img ng-show="loading" src="resources/img/ajax-loader-blue.gif"> -->
	</button>
  <div ng-show="error" class="alert alert-danger">{{ error.message }}</div>
</form>

<p style="text-align: center;">
  <button ua-oauth-link="facebook" class="btn btn-lg btn-facebook"><i class="fa fa-facebook"></i></button>
</p>
<p style="text-align: center;"><a href="#/reset-password">Forgot your password?</a></p>