package com.tidels.spring.service;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tidels.spring.dao.DrivingDAOImpl;
import com.tidels.spring.model.Driving;
import com.datastax.driver.core.Row;


@Service
public class DrivingServiceImpl implements DrivingService {
	
	private com.tidels.spring.dao.DrivingDAO drivingDAO;
	private static final Logger logger = LoggerFactory.getLogger(DrivingDAOImpl.class);

	public void setDrivingDAO(com.tidels.spring.dao.DrivingDAO drivingDAO) {
		this.drivingDAO = drivingDAO;
	}

	@Override
	public List<Driving> listDriving() {
		
		List<Driving> listpv = this.drivingDAO.listDriving();
		for(Driving pv : listpv){
			logger.info("DrivingList ServiceList::"+pv);
		}
		return this.drivingDAO.listDriving();
	}

	@Override
	public Map<String, Driving> mapDriving(String param) {
		
		Map<String, Driving> mappv = this.drivingDAO.mapDriving(param);
		
		// Get a set of the entries
	      Set set = mappv.entrySet();
	      // Get an iterator
	      Iterator i = set.iterator();
	      // Display elements
	      while(i.hasNext()) {
	         Map.Entry me = (Map.Entry)i.next();
				logger.info("DrivingList ServiceList::"+me.getValue());	      
				}
		
		
		return this.drivingDAO.mapDriving(param);
	}


}
