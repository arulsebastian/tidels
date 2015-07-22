package com.tidels.spring.dao;

import java.util.*;
import java.text.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.datastax.driver.core.*;
import com.tidels.spring.model.Placesvisited;;


public class PlacesvisitedDAOImpl implements PlacesvisitedDAO {
	
	private static final Logger logger = LoggerFactory.getLogger(PlacesvisitedDAOImpl.class);
	 private Cluster cluster;
	 private Session session;
	 private ResultSet results;
	 //private String hostIP = "127.0.0.1";
	 private String hostIP = "52.10.18.167";
	 
	 public void connect(String node) {
	 cluster = Cluster.builder()
	 .addContactPoint(node)
	 .build();
//	 session = cluster.connect("tidels");
	 session = cluster.connect("tidelsb_i");
	 }

	@Override
	public Map<String, Placesvisited> mapPlacesvisited(String user_id, String ref_date, String time_period) {
		connect(hostIP);	
		String query_str = null;
		
		Date dateWithoutTime=null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");  
		Calendar c = Calendar.getInstance();

		try{
	    dateWithoutTime = sdf.parse(ref_date);
		c.setTime(dateWithoutTime);

		
		if (time_period.equals("today"))
			query_str="SELECT * FROM CITY_BY_USER_DLY Where CUST_ID='"+user_id+"' AND CAL_DT ='"+ref_date+"'";
		else if (time_period.equals("days7"))
		{
			int month = 0;
			int day = 0;
//		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date1 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date1+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date1+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date2 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date2+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date2+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date3 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date3+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date3+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date4 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date4+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date4+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date5 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date5+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date5+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date6 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date6+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date6+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));
		    c.add(Calendar.DAY_OF_MONTH,-1);
		    String date7 = Integer.toString(c.get(Calendar.YEAR));
		    month = c.get(Calendar.MONTH)+1;
		    date7+=(month<10)?('0'+Integer.toString(month)):(Integer.toString(month));
		    day = c.get(Calendar.DAY_OF_MONTH);
		    date7+=(day<10)?('0'+Integer.toString(day)):(Integer.toString(day));

		    String query_substr = "CAL_DT in ('"+date1+"','"+date2+"','"+date3+"','"+date4+"','"+date5+"','"+date6+"','"+date7+"')";
			query_str="SELECT * FROM CITY_BY_USER_DLY Where CUST_ID='"+user_id+"' AND  "+query_substr;
		}
		else if (time_period.equals("weeks4"))
		{
//			int day = Integer.parseInt(ref_date.substring(6, 8));
//			int month = Integer.parseInt(ref_date.substring(4, 6));
//			int year = Integer.parseInt(ref_date.substring(0, 4));
//			Calendar calendar = new GregorianCalendar(year,month,day);
			int weekOfYear = 0;
			weekOfYear = c.get(Calendar.WEEK_OF_YEAR);
			String yearweeknum1 = Integer.toString(c.get(Calendar.YEAR))+((weekOfYear<10)?"0"+Integer.toString(weekOfYear):Integer.toString(weekOfYear));
			c.add(Calendar.WEEK_OF_YEAR, -1);
			weekOfYear = c.get(Calendar.WEEK_OF_YEAR);
			String yearweeknum2 = Integer.toString(c.get(Calendar.YEAR))+((weekOfYear<10)?"0"+Integer.toString(weekOfYear):Integer.toString(weekOfYear));
			c.add(Calendar.WEEK_OF_YEAR, -1);
			weekOfYear = c.get(Calendar.WEEK_OF_YEAR);
			String yearweeknum3 = Integer.toString(c.get(Calendar.YEAR))+((weekOfYear<10)?"0"+Integer.toString(weekOfYear):Integer.toString(weekOfYear));
			c.add(Calendar.WEEK_OF_YEAR, -1);
			weekOfYear = c.get(Calendar.WEEK_OF_YEAR);
			String yearweeknum4 = Integer.toString(c.get(Calendar.YEAR))+((weekOfYear<10)?"0"+Integer.toString(weekOfYear):Integer.toString(weekOfYear));
			query_str="SELECT * FROM CITY_BY_USER_WKLY Where CUST_ID='"+user_id+"' AND yearweeknum in ('"+yearweeknum1+"','"+yearweeknum2+"','"+yearweeknum3+"','"+yearweeknum4+"')";
		}
		else if (time_period.equals("months6"))
		{
		    //c.add(2,-1);
		    String date1 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date2 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date3 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date4 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date5 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date6 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));

		    String query_substr = "yearmonth in ('"+date1+"','"+date2+"','"+date3+"','"+date4+"','"+date5+"','"+date6+"')";
			query_str="SELECT * FROM CITY_BY_USER_MNTLY Where CUST_ID='"+user_id+"' AND  "+query_substr;
		}
		else if (time_period.equals("months12"))
		{
		    //c.add(2,-1);
		    String date1 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date2 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date3 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date4 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date5 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date6 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date7 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date8 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date9 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date10 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date11 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));
		    c.add(Calendar.MONTH,-1);
		    String date12 = Integer.toString(c.get(Calendar.YEAR)) + ((c.get(Calendar.MONTH)+1<10)?("0"+Integer.toString(c.get(Calendar.MONTH)+1)):Integer.toString(c.get(Calendar.MONTH)+1));

		    String query_substr = "yearmonth in ('"+date1+"','"+date2+"','"+date3+"','"+date4+"','"+date5+"','"+date6+"','"+date7+"','"+date8+"','"+date9+"','"+date10+"','"+date11+"','"+date12+"')";
			query_str="SELECT * FROM CITY_BY_USER_MNTLY Where CUST_ID='"+user_id+"' AND  "+query_substr;
		}
		else if (time_period.equals("populatedata"))
		{
				//results = session.execute("Insert into CITY_BY_USER_DLY(user_id, place_name, event_date, hours) values ('7hxEKpCPR0i-jBFFdgiiDg', 'Boston', " + i.toString() + ", 1.0)");
			}

			//results = session.execute("SELECT * FROM places_visited where user_id='7hxEKpCPR0i-jBFFdgiiDg' and event_date>'"+dl.toString()+"'");
		
	    
	
		}
		catch(Exception e){}
		finally{};


		// Use select to get the user we just entered
			results = session.execute(query_str);
			logger.info(query_str);

		//		for (Row row : results) {
//		System.out.format("%s %s %f\n", row.getString("place_name"), row.getDate("event_date"), row.getFloat("hours"));
//		}		

			 Map<String, Placesvisited> placesvisitedMap = new HashMap<String, Placesvisited>();
				for(Row r : results){
					Placesvisited pv=new Placesvisited();
					pv.setPlacename(r.getString("PLACE_DESC"));
				    pv.setHours(r.getFloat("HR_SPENT"));
				    Placesvisited placesvisitedTemp = placesvisitedMap.get(r.getString("PLACE_DESC"));
				    if (!(placesvisitedTemp==null))
				    {
				    	pv.setHours(pv.getHours() + placesvisitedTemp.getHours());
				    }
			    	placesvisitedMap.put(r.getString("PLACE_DESC"), pv);
			    	logger.info("PlacesvisitedMap Map::"+pv);
				}
				

		
		//cluster.close();		
				return placesvisitedMap;
	}



}
