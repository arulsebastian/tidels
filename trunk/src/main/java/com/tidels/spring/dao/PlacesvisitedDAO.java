package com.tidels.spring.dao;

import java.util.*;

import com.tidels.spring.model.Placesvisited;

public interface PlacesvisitedDAO {

//	public void addCategory(Category p);
//	public void updateCategory(Category p);
//	public List<Placesvisited> listPlacesvisited(String user_id, String time_period, String ref_date);
	public Map<String, Placesvisited> mapPlacesvisited(String user_id, String time_period, String ref_date);
//	public Category getCategoryById(int id);
//	public void removeCategory(int id);
}
