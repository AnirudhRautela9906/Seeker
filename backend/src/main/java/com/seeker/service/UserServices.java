package com.seeker.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seeker.dto.UserDTO;
import com.seeker.exception.BackendException;
import com.seeker.model.Address;
import com.seeker.model.User;
import com.seeker.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServices {
	
	@Autowired
	private UserRepository UserRepo;
	
//	@Autowired
//	private AddressRepository AddRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	
	// Admin ==> List of all Users  
	public List<UserDTO> getAllUsers(){
		return UserRepo.findAll().stream()
				.map(e-> mapper.map(e, UserDTO.class))
				.collect(Collectors.toList());
	}
	
	// One user details
	public UserDTO getUser(String email) {
		return mapper.map(UserRepo.findByEmail(email).orElseThrow(() -> new BackendException("User not Found")),
				UserDTO.class);
	}

	// Create User
	public UserDTO registerUser(UserDTO UserDTO) {
		
		System.out.println(UserDTO);
		
		User User = mapper.map(UserDTO, User.class);
		
		Address Address = User.getAddress();
		
		// Important
		Address.setUser(User);
		User.setAddress(Address);
		
		return mapper.map(UserRepo.save(User), UserDTO.class);
	}
	
	
	// Update User details
	public UserDTO updateUser(String email,UserDTO UserDTO) {
		User User = mapper.map(UserDTO, User.class);
		if (UserRepo.existsById(email)) {
			User.setEmail(email);
//			User.setIssue_details(UserDTO.getIssue_details());
//			User.setResolution_details(UserDTO.getResolution_details());
//			User.setStatus(UserDTO.getStatus());
			
			UserRepo.save(User);			
			return mapper.map(User, UserDTO.class);
		}
		throw new BackendException("User Not Found");
	}
	
//	Admin ==> Delete
	public String deleteUser(String email) {
		if (UserRepo.existsById(email)) {
			UserRepo.deleteById(email);
			return "Deleted Successfully";
		}
		throw new BackendException("User Not Found");
	}
}
