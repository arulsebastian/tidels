<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>

<c:if test="${!empty mapPlacesvisited }">
	<table class="tg">
	<tr>
		<th width="100">Place</th>
		<th width="60">Hours</th>
	</tr>
	<c:forEach items="${mapPlacesvisited}" var="placesvisited">
	
		<tr>
			<td>${placesvisited.value.placename}</td>
			<td>${placesvisited.value.hours}</td>
		</tr>
	</c:forEach>
	</table>
</c:if>
</form>
 
            </div>

