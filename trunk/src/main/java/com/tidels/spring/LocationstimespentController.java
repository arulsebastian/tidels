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

import com.tidels.spring.dao.LocationstimespentDAOImpl;
import com.tidels.spring.model.Locationstimespent;
import com.tidels.spring.service.LocationstimespentService;

@Controller
public class LocationstimespentController {
	private LocationstimespentService locationstimespentService;
	private static final Logger logger = LoggerFactory.getLogger(LocationstimespentDAOImpl.class);
	
	@Autowired(required=true)
	@Qualifier(value="LocationstimespentService")
	public void setLocationstimespentService(LocationstimespentService ls){
		this.locationstimespentService = ls;
	}
	
	public void doJob(Model model, String timePeriod) {
		
		model.addAttribute("locationstimespent", new Locationstimespent());
		model.addAttribute("timePeriod", timePeriod);
		
		model.addAttribute("mapLocationstimespent", this.locationstimespentService.mapLocationstimespent(timePeriod));
		Map<String, Locationstimespent> mappv =  this.locationstimespentService.mapLocationstimespent(timePeriod);
	}

	
	@RequestMapping(value = {"/locationstimespent","/locationstimespent/today"}, method = RequestMethod.GET)
	public String listToday(Model model) {
		
		doJob(model,"today");
		return "locationstimespent";
	}

	@RequestMapping(value = {"/locationstimespent/todaychart"}, method = RequestMethod.GET)
	public String listTodayChart(Model model) {
		
		doJob(model,"today");
		return "locationstimespentchart";
		
	}

	@RequestMapping(value = "/locationstimespent/days7", method = RequestMethod.GET)
	public String listdays7(Model model) {
		
		doJob(model,"days7");
		return "locationstimespent";
	}

	@RequestMapping(value = "/locationstimespent/days7chart", method = RequestMethod.GET)
	public String listdays7chart(Model model) {
		
		doJob(model,"days7");
		return "locationstimespentchart";
	}

	@RequestMapping(value = "/locationstimespent/weeks4", method = RequestMethod.GET)
	public String listweeks4(Model model) {
		
		doJob(model,"weeks4");
		return "locationstimespent";
	}

	@RequestMapping(value = "/locationstimespent/weeks4chart", method = RequestMethod.GET)
	public String listweeks4chart(Model model) {
		
		doJob(model,"weeks4");
		return "locationstimespentchart";
	}

	@RequestMapping(value = "/locationstimespent/months6", method = RequestMethod.GET)
	public String listmonths6(Model model) {
		
		doJob(model,"months6");
		return "locationstimespent";
	}

	@RequestMapping(value = "/locationstimespent/months6chart", method = RequestMethod.GET)
	public String listmonths6chart(Model model) {
		
		doJob(model,"months6");
		return "locationstimespentchart";
	}

	@RequestMapping(value = "/locationstimespent/months12", method = RequestMethod.GET)
	public String listmonths126(Model model) {
		
		doJob(model,"months12");
		return "locationstimespent";
	}

	@RequestMapping(value = "/locationstimespent/months12chart", method = RequestMethod.GET)
	public String listmonsths12chart(Model model) {
		
		doJob(model,"months12");
		return "locationstimespentchart";
	}


}

