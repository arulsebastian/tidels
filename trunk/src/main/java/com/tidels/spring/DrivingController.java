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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.tidels.spring.dao.DrivingDAOImpl;
import com.tidels.spring.model.Driving;
import com.tidels.spring.service.DrivingService;

@Controller
public class DrivingController {
	private DrivingService drivingService;
	private static final Logger logger = LoggerFactory.getLogger(DrivingDAOImpl.class);
	
	@Autowired(required=true)
	@Qualifier(value="drivingService")
	public void setDrivingService(DrivingService ps){
		this.drivingService = ps;
	}
	
	public void doJob(Model model, String timePeriod) {
		
		model.addAttribute("driving", new Driving());
		model.addAttribute("timePeriod", timePeriod);
		
		model.addAttribute("mapDriving", this.drivingService.mapDriving(timePeriod));
		Map<String, Driving> mappv =  this.drivingService.mapDriving(timePeriod);
	}

	
	@RequestMapping(value = {"/driving","/driving/today"}, method = RequestMethod.GET)
	public String listToday(Model model) {
		
		doJob(model,"today");
		return "driving";
	}

	@RequestMapping(value = {"/driving/todaychart"}, method = RequestMethod.GET)
	public String listTodayChart(Model model) {
		
		doJob(model,"today");
		return "drivingchart";
		
	}

	@RequestMapping(value = "/driving/days7", method = RequestMethod.GET)
	public String listdays7(Model model) {
		
		doJob(model,"days7");
		return "driving";
	}

	@RequestMapping(value = "/driving/days7chart", method = RequestMethod.GET)
	public String listdays7chart(Model model) {
		
		doJob(model,"days7");
		return "drivingchart";
	}

	@RequestMapping(value = "/driving/weeks4", method = RequestMethod.GET)
	public String listweeks4(Model model) {
		
		doJob(model,"weeks4");
		return "driving";
	}

	@RequestMapping(value = "/driving/weeks4chart", method = RequestMethod.GET)
	public String listweeks4chart(Model model) {
		
		doJob(model,"weeks4");
		return "drivingchart";
	}

	@RequestMapping(value = "/driving/months6", method = RequestMethod.GET)
	public String listmonths6(Model model) {
		
		doJob(model,"months6");
		return "driving";
	}

	@RequestMapping(value = "/driving/months6chart", method = RequestMethod.GET)
	public String listmonths6chart(Model model) {
		
		doJob(model,"months6");
		return "drivingchart";
	}

	@RequestMapping(value = "/driving/months12", method = RequestMethod.GET)
	public String listmonths126(Model model) {
		
		doJob(model,"months12");
		return "driving";
	}

	@RequestMapping(value = "/driving/months12chart", method = RequestMethod.GET)
	public String listmonsths12chart(Model model) {
		
		doJob(model,"months12");
		return "drivingchart";
	}


}

