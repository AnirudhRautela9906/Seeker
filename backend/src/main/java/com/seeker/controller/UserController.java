package com.seeker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seeker.dto.UserDTO;
import com.seeker.service.UserServices;

import jakarta.validation.Valid;



@RestController
@RequestMapping("/seeker/user")
public class UserController {

	@Autowired
	private UserServices userSer;
	
	
	@GetMapping
	public ResponseEntity<?> getAllUsers(){
		return ResponseEntity.status(HttpStatus.OK).body(userSer.getAllUsers());
	}

	@GetMapping("/{email}")
	public ResponseEntity<?> getUser(@PathVariable String email) {
		return ResponseEntity.status(HttpStatus.OK).body(userSer.getUser(email));
	}
	
	@PostMapping
	public ResponseEntity<?> registerUser(@Valid @RequestBody UserDTO userDto) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userSer.registerUser(userDto));
	}
	
	@PutMapping("/{email}")
	public ResponseEntity<?> updateUser(@Valid @PathVariable String email, @RequestBody UserDTO userDto) {
		return ResponseEntity.status(HttpStatus.OK).body(userSer.updateUser(email, userDto));
	}
	
	@DeleteMapping("/{email}")
	public ResponseEntity<?> deleteTicket(@Valid @PathVariable String email) {
		return ResponseEntity.status(HttpStatus.OK).body(userSer.deleteUser(email));
	}
}
