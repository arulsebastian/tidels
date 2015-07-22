package com.tidels.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

public class Driving {

	@Column(name="fromlocation")
	private String fromlocation;
	@Column(name="tolocation")
	private String tolocation;
	@Column(name="eventdate")
	private String eventdate;
	@Column(name="hours")
	private Float hours;
	@Column(name="starthours")
	private Float starthours;
	@Column(name="endhours")
	private Float endhours;
	

	public String getFromlocation() {
		return fromlocation;
	}

	public void setFromlocation(String fromlocation) {
		this.fromlocation = fromlocation;
	}

	public String getTolocation() {
		return tolocation;
	}

	public void setTolocation(String tolocation) {
		this.tolocation = tolocation;
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


	public Float getStarthours() {
		return starthours;
	}

	public void setStarthours(Float starthours) {
		this.starthours = starthours;
	}

	public Float getEndhours() {
		return endhours;
	}

	public void setEndhours(Float endhours) {
		this.endhours = endhours;
	}


	@Override
	public String toString(){
		return "name="+fromlocation+tolocation+eventdate+hours.toString()+starthours.toString()+endhours.toString();
	}
}
