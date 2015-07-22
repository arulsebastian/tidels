<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>

    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawStuff);

      function drawStuff() {
        var data = new google.visualization.DataTable();
        
        data.addColumn('string', 'Place');
        data.addColumn('number', 'hours');
             
       var i =0;
   	<c:forEach items="${mapPlacesvisited}" var="placesvisited">
        var j = 0;
        data.addRows(1); 
        data.setCell(i, j, "${placesvisited.value.placename}");
        j = j+1;
        data.setCell(i, j, "${placesvisited.value.hours}");
        i = i+1;
        </c:forEach>
		

        var options = {
          width: 500,
          height: 400,
          chart: {
            title: '',
          },
          series: {
            0: { axis: 'place' }, // Bind series 0 to an axis named 'place'.

          },
          axes: {
            y: {
              hours: {label: 'hours'}, // Left y-axis.
            }
          }
        };

      var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
      chart.draw(data, options);
    };
    </script>

<form>
<table>
<tr>
<td width="60"></td>
<td><div id="dual_y_div" style="width: 900px; height: 500px;"></div></td>
</tr>
</table>

</form>
