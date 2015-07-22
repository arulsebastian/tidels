package com.tidels.spring.service;

import java.util.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tidels.spring.dao.LocationstimespentDAOImpl;
import com.tidels.spring.model.Locationstimespent;
import com.datastax.driver.core.Row;


@Service
public class LocationstimespentServiceImpl implements LocationstimespentService {
	
	private com.tidels.spring.dao.LocationstimespentDAO locationstimespentDAO;
	private static final Logger logger = LoggerFactory.getLogger(LocationstimespentDAOImpl.class);

	public void setLocationstimespentDAO(com.tidels.spring.dao.LocationstimespentDAO locationstimespentDAO) {
		this.locationstimespentDAO = locationstimespentDAO;
	}

	@Override
	public List<Locationstimespent> listLocationstimespent() {
		
		List<Locationstimespent> listpv = this.locationstimespentDAO.listLocationstimespent();
		for(Locationstimespent pv : listpv){
			logger.info("LocationstimespentList ServiceList::"+pv);
		}
		return this.locationstimespentDAO.listLocationstimespent();
	}

	@Override
	public Map<String, Locationstimespent> mapLocationstimespent(String param) {
		
		Map<String, Locationstimespent> mappv = this.locationstimespentDAO.mapLocationstimespent(param);
		
		// Get a set of the entries
	      Set set = mappv.entrySet();
	      // Get an iterator
	      Iterator i = set.iterator();
	      // Display elements
	      while(i.hasNext()) {
	         Map.Entry me = (Map.Entry)i.next();
				logger.info("LocationstimespentList ServiceList::"+me.getValue());	      
				}
		
		
		return this.locationstimespentDAO.mapLocationstimespent(param);
	}


}
