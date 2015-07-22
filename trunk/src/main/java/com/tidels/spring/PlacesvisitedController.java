package com.tidels.spring;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.tidels.spring.dao.PlacesvisitedDAOImpl;
import com.tidels.spring.model.Placesvisited;
import com.tidels.spring.service.PlacesvisitedService;

@Controller
public class PlacesvisitedController {
	private PlacesvisitedService placesvisitedService;
	private static final Logger logger = LoggerFactory.getLogger(PlacesvisitedDAOImpl.class);
	
	@Autowired(required=true)
	@Qualifier(value="placesvisitedService")
	public void setPlacesvisitedService(PlacesvisitedService ps){
		this.placesvisitedService = ps;
	}
	
	public void doJob(Model model, String user_id, String ref_date, String time_Period) {
		
		model.addAttribute("placesvisited", new Placesvisited());
		model.addAttribute("timePeriod", time_Period);
		
		model.addAttribute("mapPlacesvisited", this.placesvisitedService.mapPlacesvisited(user_id, ref_date, time_Period));
	}

	
	@RequestMapping(value = {"/placesvisited"}, method = RequestMethod.GET)
	public String listPlacesvisited(Model model, @RequestParam(value="user_id") String user_id, @RequestParam(value="ref_date") String ref_date, @RequestParam(value="time_period") String time_period) {
		
		doJob(model,user_id, ref_date, time_period);
		return "placesvisited";
	}

	@RequestMapping(value = {"/placesvisitedchart"}, method = RequestMethod.GET)
	public String listPlacesvisitedchart(Model model, @RequestParam(value="user_id") String user_id, @RequestParam(value="ref_date") String ref_date, @RequestParam(value="time_period") String time_period) {
		
		doJob(model,user_id, ref_date, time_period);
		return "placesvisitedchart";
	}


//	@RequestMapping(value = {"/placesvisited/today"}, method = RequestMethod.GET)
//	public String listToday(Model model, @RequestParam(value="user_id") String user_id, @RequestParam(value="ref_date") String ref_date, @RequestParam(value="time_period") String time_period) {
//		
//		doJob(model,"today");
//		return "placesvisited";
//	}
//
//
//	
//	@RequestMapping(value = {"/populatedata"}, method = RequestMethod.GET)
//	public String populateData(Model model) {
//		
//		doJob(model,"populatedata");
//		return "placesvisited";
//	}
//
//	
//	
//	
//	
//	
//	@RequestMapping(value = {"/placesvisited/todaychart"}, method = RequestMethod.GET)
//	public String listTodayChart(Model model) {
//		
//		doJob(model,"today");
//		return "placesvisitedchart";
//		
//	}
//
//	@RequestMapping(value = "/placesvisited/days7", method = RequestMethod.GET)
//	public String listdays7(Model model) {
//		
//		doJob(model,"days7");
//		return "placesvisited";
//	}
//
//	@RequestMapping(value = "/placesvisited/days7chart", method = RequestMethod.GET)
//	public String listdays7chart(Model model) {
//		
//		doJob(model,"days7");
//		return "placesvisitedchart";
//	}
//
//	@RequestMapping(value = "/placesvisited/weeks4", method = RequestMethod.GET)
//	public String listweeks4(Model model) {
//		
//		doJob(model,"weeks4");
//		return "placesvisited";
//	}
//
//	@RequestMapping(value = "/placesvisited/weeks4chart", method = RequestMethod.GET)
//	public String listweeks4chart(Model model) {
//		
//		doJob(model,"weeks4");
//		return "placesvisitedchart";
//	}
//
//	@RequestMapping(value = "/placesvisited/months6", method = RequestMethod.GET)
//	public String listmonths6(Model model) {
//		
//		doJob(model,"months6");
//		return "placesvisited";
//	}
//
//	@RequestMapping(value = "/placesvisited/months6chart", method = RequestMethod.GET)
//	public String listmonths6chart(Model model) {
//		
//		doJob(model,"months6");
//		return "placesvisitedchart";
//	}
//
//	@RequestMapping(value = "/placesvisited/months12", method = RequestMethod.GET)
//	public String listmonths126(Model model) {
//		
//		doJob(model,"months12");
//		return "placesvisited";
//	}
//
//	@RequestMapping(value = "/placesvisited/months12chart", method = RequestMethod.GET)
//	public String listmonsths12chart(Model model) {
//		
//		doJob(model,"months12");
//		return "placesvisitedchart";
//	}
//
//	@RequestMapping(value = {"/placesvisited/dailychart"}, method = RequestMethod.GET)
//	public String listDailyChart(Model model) {
//		
//		doJob(model,"today");
//		return "placesvisitedchart";
//		
//	}

}

