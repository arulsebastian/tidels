package com.tidels.spring.service;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tidels.spring.dao.PlacesvisitedDAOImpl;
import com.tidels.spring.model.Placesvisited;
import com.datastax.driver.core.Row;


@Service
public class PlacesvisitedServiceImpl implements PlacesvisitedService {
	
	private com.tidels.spring.dao.PlacesvisitedDAO placesvisitedDAO;
	private static final Logger logger = LoggerFactory.getLogger(PlacesvisitedDAOImpl.class);

	public void setPlacesvisitedDAO(com.tidels.spring.dao.PlacesvisitedDAO placesvisitedDAO) {
		this.placesvisitedDAO = placesvisitedDAO;
	}

	@Override
	public Map<String, Placesvisited> mapPlacesvisited(String user_id, String ref_date, String time_period) {
		
//		List<Placesvisited> listpv = this.placesvisitedDAO.listPlacesvisited();
//		for(Placesvisited pv : listpv){
//			logger.info("PlacesvisitedList ServiceList::"+pv);
//		}
		return this.placesvisitedDAO.mapPlacesvisited(user_id, ref_date, time_period);
	}

}
