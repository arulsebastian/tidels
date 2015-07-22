package com.tidels.spring.dao;

import java.util.List;
import java.util.ArrayList;
import java.util.*;
import java.text.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;


import com.datastax.driver.core.*;
import com.tidels.spring.model.Locationstimespent;;


public class LocationstimespentDAOImpl implements LocationstimespentDAO {
	
	private static final Logger logger = LoggerFactory.getLogger(LocationstimespentDAOImpl.class);
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
	public List<Locationstimespent> listLocationstimespent() {
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
//		System.out.format("%s %s %f\n", row.getString("location_name"), row.getDate("event_date"), row.getFloat("hours"));
//		}		
		cluster.close();		

		 List<Locationstimespent> locationstimespentList = new ArrayList<Locationstimespent>();
		for(Row r : results){
			Locationstimespent lts=new Locationstimespent();
			lts.setLocationname(r.getString("location_name"));
		    lts.setEventdate(r.getDate("event_date").toString());
		    lts.setHours(r.getFloat("hours"));
			locationstimespentList.add(lts);
			logger.info("LocationstimespentList List::"+lts);
		}
		return locationstimespentList;
	}

	@Override
	public Map<String, Locationstimespent> mapLocationstimespent(String param) {
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
			results = session.execute("SELECT * FROM locations_timespent where user_id='7hxEKpCPR0i-jBFFdgiiDg' and event_date>'"+dl.toString()+"'");

		//		for (Row row : results) {
//		System.out.format("%s %s %f\n", row.getString("location_name"), row.getDate("event_date"), row.getFloat("hours"));
//		}		
		cluster.close();		

		 Map<String, Locationstimespent> locationstimespentMap = new HashMap<String, Locationstimespent>();
		for(Row r : results){
			Locationstimespent lts=new Locationstimespent();
			lts.setLocationname(r.getString("location_name"));
		    lts.setEventdate(r.getDate("event_date").toString());
		    lts.setHours(r.getFloat("hours"));
		    Locationstimespent locationstimespentTemp = locationstimespentMap.get(r.getString("location_name"));
		    if (!(locationstimespentTemp==null))
		    {
		    	lts.setHours(lts.getHours() + locationstimespentTemp.getHours());
		    }
	    	locationstimespentMap.put(r.getString("location_name"), lts);
	    	logger.info("LocationstimespentMap Map::"+lts);
		}
		return locationstimespentMap;
	}

}
