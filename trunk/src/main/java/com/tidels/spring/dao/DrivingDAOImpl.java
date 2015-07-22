package com.tidels.spring.dao;

import java.util.List;
import java.util.ArrayList;
import java.util.*;
import java.text.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;


import com.datastax.driver.core.*;
import com.tidels.spring.model.Driving;;


public class DrivingDAOImpl implements DrivingDAO {
	
	private static final Logger logger = LoggerFactory.getLogger(DrivingDAOImpl.class);
	 private Cluster cluster;
	 private Session session;
	 private ResultSet results;
	 private String hostIP = "192.168.1.2";
	 
	 public void connect(String node) {
	 cluster = Cluster.builder()
	 .addContactPoint(node)
	 .build();
	 session = cluster.connect("tidels");
	 }

	@Override
	public List<Driving> listDriving() {
		connect(hostIP);	
		
		Date dateWithoutTime=null;
		Long dl=new Long(0);
		try{
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");      
	    dateWithoutTime = sdf.parse(sdf.format(new Date()));
	    dl = dateWithoutTime.getTime();
		}
		catch(Exception e){}
		finally{};
	   
		
		// Use select to get the user we just entered
		results = session.execute("SELECT * FROM places_visited where user_id='7hxEKpCPR0i-jBFFdgiiDg' and event_date>'"+dl.toString()+"'");
//		for (Row row : results) {
//		System.out.format("%s %s %f\n", row.getString("place_name"), row.getDate("event_date"), row.getFloat("hours"));
//		}		
		cluster.close();		

		 List<Driving> drivingList = new ArrayList<Driving>();
//		for(Row r : results){
//			Driving dr=new Driving();
//			dr.setPlacename(r.getString("place_name"));
//		    dr.setEventdate(r.getDate("event_date").toString());
//		    dr.setHours(r.getFloat("hours"));
//			drivingList.add(dr);
//			logger.info("DrivingList List::"+dr);
//		}
		return drivingList;
	}

	@Override
	public Map<String, Driving> mapDriving(String param) {
		connect(hostIP);	
		
		Date dateWithoutTime=null;
		Long dl=new Long(0);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
		Calendar c = Calendar.getInstance();

		try{
	    dateWithoutTime = sdf.parse(sdf.format(new Date()));
	    dl = dateWithoutTime.getTime();
		c.setTime(dateWithoutTime);
		if (param=="today")
			dl = dl;
		else if (param=="days7")
		{
		    c.add(3,-7);
		    dl = c.getTimeInMillis();
		}
		else if (param=="weeks4")
		{
		    c.add(3,-28);
		    dl = c.getTimeInMillis();
		}
		else if (param=="months6")
		{
		    c.add(2,-6);
		    dl = c.getTimeInMillis();
		}
		else if (param=="months12")
		{
		    c.add(2,-12);
		    dl = c.getTimeInMillis();
		}
	    
		}
		catch(Exception e){}
		finally{};
	   
		
			
			// Use select to get the user we just entered
			results = session.execute("SELECT * FROM driving where user_id='7hxEKpCPR0i-jBFFdgiiDg' and event_date>'"+dl.toString()+"'");

		//		for (Row row : results) {
//		System.out.format("%s %s %f\n", row.getString("place_name"), row.getDate("event_date"), row.getFloat("hours"));
//		}		
		cluster.close();		

		 Map<String, Driving> drivingMap = new HashMap<String, Driving>();
		for(Row r : results){
			Driving dr=new Driving();
			dr.setFromlocation(r.getString("from_location"));
			dr.setTolocation(r.getString("to_location"));
		    dr.setEventdate(r.getDate("event_date").toString());
		    dr.setHours(r.getFloat("hours"));
		    dr.setStarthours(r.getFloat("start_hours"));
		    dr.setEndhours(r.getFloat("end_hours"));
		    Driving drivingTemp = drivingMap.get(r.getString("from_location")+"-"+r.getString("to_location"));
		    if (!(drivingTemp==null))
		    {
		    	dr.setHours(dr.getHours() + drivingTemp.getHours());
		    }
	    	drivingMap.put(r.getString("from_location")+"-"+r.getString("to_location"), dr);
	    	logger.info("DrivingMap Map::"+dr);
		}
		return drivingMap;
	}

}
