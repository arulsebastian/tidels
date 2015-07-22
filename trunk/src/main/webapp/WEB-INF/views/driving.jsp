<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>

<!DOCTYPE html>
<html lang="en" ng-app="myApp" ng-controller="HomeCtrl">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<jsp:include page="header.jsp" />

</head>
<body class="index-page">
<jsp:include page="menu.jsp" />

      <div class="col-ss-12 hm-bottom purple">
        <div class="container">
           
            <div class="featured-boxes">
                <div class="box-tab">
                    <button id="set_1" class="getDefoult" onclick="viewTab(1);">Home</button>
                    
                    <button id="set_2" class="getDefoult" onclick="viewTab(2);">Places Visited</button>
                    <button id="set_3" class="getDefoult" onclick="viewTab(3);">Locations</button>
                    <button id="set_4" class="active getDefoult" onclick="viewTab(4);">Driving</button>
               </div>     
                    
                </div>
                
                </div>
             
                
                
<form>
<div>
<h2>
                <a href="/tidels/driving/today/"<c:if test="${timePeriod == 'today'}"> class="active getDefoult" </c:if>>Today&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/driving/days7/"<c:if test="${timePeriod == 'days7'}"> class="active getDefoult" </c:if>>7 Days&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/driving/weeks4/"<c:if test="${timePeriod == 'weeks4'}"> class="active getDefoult" </c:if>>4 Weeks&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/driving/months6/"<c:if test="${timePeriod == 'months6'}"> class="active getDefoult" </c:if>>6 Months&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/driving/months12/"<c:if test="${timePeriod == 'months12'}"> class="active getDefoult" </c:if>>12 Months&nbsp&nbsp&nbsp&nbsp&nbsp</a>
 <br>
 </h2>  
 <h3>
 
                <a href="/tidels/driving/${timePeriod}/"  class="active getDefoult" >Dashboard&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/driving/${timePeriod}chart/">Chart&nbsp&nbsp&nbsp&nbsp&nbsp</a>
</h3><br> 
<c:if test="${!empty mapDriving }">
	<table class="tg">
	<tr>
		<th width="100">FromLocation</th>
		<th width="100">ToLocation</th>
		<th width="280">Date</th>
		<th width="60">Hours</th>
		<th width="60">StartTime</th>
		<th width="60">EndTime</th>
	</tr>
	<c:forEach items="${mapDriving}" var="driving">
	
		<tr>
			<td>${driving.value.fromlocation}</td>
			<td>${driving.value.tolocation}</td>
			<td>${driving.value.eventdate}</td>
			<td>${driving.value.hours}</td>
			<td>${driving.value.starthours}</td>
			<td>${driving.value.endhours}</td>
		</tr>
	</c:forEach>
	</table>
</c:if>
</form>
 
            </div>


<jsp:include page="footer.jsp" />
</body>
</html>
