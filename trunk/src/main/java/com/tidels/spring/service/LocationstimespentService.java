package com.tidels.spring.service;

import java.util.*;

import com.tidels.spring.model.Locationstimespent;

public interface LocationstimespentService {

//	public void addCategory(Category p);
//	public void updateCategory(Category p);
	public List<Locationstimespent> listLocationstimespent();
	public Map<String, Locationstimespent> mapLocationstimespent(String param);
//	public Category getCategoryById(int id);
//	public void removeCategory(int id);
	
}
