package com.tidels.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

public class Locationstimespent {

	@Column(name="locationname")
	private String locationname;
	@Column(name="eventdate")
	private String eventdate;
	@Column(name="hours")
	private Float hours;
	

	public String getLocationname() {
		return locationname;
	}

	public void setLocationname(String locationname) {
		this.locationname = locationname;
	}

	public String getEventdate() {
		return eventdate;
	}

	public void setEventdate(String eventdate) {
		this.eventdate = eventdate;
	}

	public Float getHours() {
		return hours;
	}

	public void setHours(Float hours) {
		this.hours = hours;
	}


	@Override
	public String toString(){
		return "name="+locationname+eventdate+hours.toString();
	}
}
