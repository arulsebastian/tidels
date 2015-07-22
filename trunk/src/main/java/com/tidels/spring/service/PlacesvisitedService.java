package com.tidels.spring.service;

import java.util.*;

import com.tidels.spring.model.Placesvisited;

public interface PlacesvisitedService {

//	public void addCategory(Category p);
//	public void updateCategory(Category p);
	public Map<String, Placesvisited> mapPlacesvisited(String user_id, String ref_date, String time_period);
//	public Category getCategoryById(int id);
//	public void removeCategory(int id);
	
}
