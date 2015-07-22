package com.tidels.spring;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AjaxController {

	@RequestMapping(value = "/ajax/loginpopup", method = RequestMethod.POST)
	public String loginpopup() {
	
		return "ajax/loginpopup";
	}
}
