<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="en" ng-app="myApp" ng-controller="HomeCtrl">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">

<title>::Tidels::</title>

<%-- <jsp:include page="header.jsp" /> --%>
<%@ include file="header.jsp" %>

</head>
<body id="page-top" class="home">

<!-- PRELOADER -->
<div id="preloader">
  <div class="pre-icon">
    <div class="pre-item pre-item-1"></div>
    <div class="pre-item pre-item-2"></div>
    <div class="pre-item pre-item-3"></div>
    <div class="pre-item pre-item-4"></div>
  </div>
</div>
<!-- END / PRELOADER --> 
	
<jsp:include page="menu.jsp" />

    <div ng-view></div>
 
 

<jsp:include page="footer.jsp" />


 <!-- SCRIPTS --> 
  
<!-- <script type="text/javascript">
// if (!isLogout){
// 	user.logout();
// 	isLogout=false;
// }
</script> -->

   
 <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
<!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->

   <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<!--     <script src="/tidels/resources/lib/angular/angular.min.js"></script> -->
<!--    <script src="/tidels/resources/lib/angular/angular-route.min.js"></script> -->
  
<!--   <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script> -->



<!-- 	<script type="text/javascript" src="/tidels/resources/1.2.2/ng_all.js"></script> -->
<!-- 	<script type="text/javascript" src="/tidels/resources/1.2.2/components/calendar.js"></script> -->

<!-- <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.0/angular-route.js"></script> -->

<!--     <script type="text/javascript" src="https://www.google.com/jsapi"></script> -->

<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="/tidels/resources/js/date.js"></script>
<script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.13.0.js"></script>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-touch.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/csv.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/pdfmake.js"></script>
    <script src="http://ui-grid.info/docs/grunt-scripts/vfs_fonts.js"></script>
<script src="/tidels/resources/js/ui-grid.js"></script>


   <!-- Load jQuery  -->
<script type="text/javascript" src="/tidels/resources/js/library/jquery-1.11.0.min.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/library/bootstrap.min.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/library/jquery.owl.carousel.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/library/jquery.appear.min.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/library/perfect-scrollbar.min.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/library/jquery.easing.min.js"></script> 
<script type="text/javascript" src="/tidels/resources/js/scripts.js"></script>

  <script src="/tidels/resources/js/app.js"></script>
  <script src="/tidels/resources/js/services.js"></script>
  <script src="/tidels/resources/js/controllers.js"></script>
  <script src="/tidels/resources/js/filters.js"></script>
  <script src="/tidels/resources/js/directives.js"></script>

    
</body>
</html>
