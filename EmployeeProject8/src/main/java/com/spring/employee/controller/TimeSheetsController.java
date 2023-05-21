package com.spring.employee.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.employee.entity.Otl;
import com.spring.employee.entity.Timex;
import com.spring.employee.repository.OtlRepository;
import com.spring.employee.repository.TimexRepository;


@RestController
@CrossOrigin(originPatterns = "*")
public class TimeSheetsController 
{


	@Autowired
	OtlRepository otlRepo;


	

	@PostMapping("/otls")
	public ResponseEntity<String> createOtl(@RequestBody Otl otlRequest) 
	{
		
		try {
			Otl otl = new Otl();

			otl.setMonday(otlRequest.getMonday());
			otl.setTuesday(otlRequest.getTuesday());
			otl.setWednesday(otlRequest.getWednesday());
			otl.setThursday(otlRequest.getThursday());
			otl.setFriday(otlRequest.getFriday());
			otl.setCowe(otlRequest.getCowe());
			otl.setCowd(otlRequest.getCowd());
			otl.setSowd(otlRequest.getSowd());
			otl.setSowe(otlRequest.getSowe());
			otl.setSoph(otlRequest.getSoph());
			otl.setCoph(otlRequest.getCoph());
			 Otl createdOtl = otlRepo.save(otl);
			return ResponseEntity.status(HttpStatus.CREATED).body("OTL created successfully with ID: " + createdOtl.getOtlId());
			
			
		}
		
		catch(Exception e){
			
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("failed to create otl" + e.getMessage());
		
			
		}
		
			
		}

}
	
