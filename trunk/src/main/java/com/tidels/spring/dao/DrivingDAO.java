package com.tidels.spring.dao;

import java.util.*;

import com.tidels.spring.model.Driving;

public interface DrivingDAO {

//	public void addCategory(Category p);
//	public void updateCategory(Category p);
	public List<Driving> listDriving();
	public Map<String, Driving> mapDriving(String param);
//	public Category getCategoryById(int id);
//	public void removeCategory(int id);
}
