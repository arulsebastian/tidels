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
                    <button id="set_3" class="active getDefoult" onclick="viewTab(3);">Locations</button>
                    <button id="set_4" class="getDefoult" onclick="viewTab(4);">Driving</button>
               </div>     
                    
                </div>
                
                </div>
             
                
                
<form>
<div>
<h2>
                <a href="/tidels/locationstimespent/today/"<c:if test="${timePeriod == 'today'}"> class="active getDefoult" </c:if>>Today&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/locationstimespent/days7/"<c:if test="${timePeriod == 'days7'}"> class="active getDefoult" </c:if>>7 Days&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/locationstimespent/weeks4/"<c:if test="${timePeriod == 'weeks4'}"> class="active getDefoult" </c:if>>4 Weeks&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/locationstimespent/months6/"<c:if test="${timePeriod == 'months6'}"> class="active getDefoult" </c:if>>6 Months&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/locationstimespent/months12/"<c:if test="${timePeriod == 'months12'}"> class="active getDefoult" </c:if>>12 Months&nbsp&nbsp&nbsp&nbsp&nbsp</a>
 <br>
 </h2>  
 <h3>
 
                <a href="/tidels/locationstimespent/${timePeriod}/"  class="active getDefoult" >Dashboard&nbsp&nbsp&nbsp&nbsp&nbsp</a>
                <a href="/tidels/locationstimespent/${timePeriod}chart/">Chart&nbsp&nbsp&nbsp&nbsp&nbsp</a>
</h3><br> 
<c:if test="${!empty mapLocationstimespent }">
	<table class="tg">
	<tr>
		<th width="100">Location</th>
		<th width="280">Date</th>
		<th width="60">Hours</th>
	</tr>
	<c:forEach items="${mapLocationstimespent}" var="locationstimespent">
	
		<tr>
			<td>${locationstimespent.value.locationname}</td>
			<td>${locationstimespent.value.eventdate}</td>
			<td>${locationstimespent.value.hours}</td>
		</tr>
	</c:forEach>
	</table>
</c:if>
</form>
 
            </div>


<jsp:include page="footer.jsp" />
</body>
</html>
