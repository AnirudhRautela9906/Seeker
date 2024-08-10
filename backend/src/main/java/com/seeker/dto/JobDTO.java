package com.seeker.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.seeker.model.Address;
import com.seeker.model.JobStatus;
import com.seeker.model.User;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class JobDTO {

	private Long jobId;
	@NotEmpty(message = "Short Description cannot be empty")
	@NotNull(message = "Short Description cannot be null")
	@NotBlank(message = "Short Description cannot be blank")
    private String shortDesc;
    
	@NotEmpty(message = "Long Description cannot be empty")
	@NotNull(message = "Long Description cannot be null")
	@NotBlank(message = "Long Description cannot be blank")
    private String longDesc;

	private User creator;
	
	private String creatorEmail;

	private Double price;

	private Address jobLocation;

	private User assignedUser;

	private LocalDateTime jobPostDateTime = LocalDateTime.now();

	private List<User> appliedUsers = new ArrayList<>();

	private JobStatus status= JobStatus.POSTED;
}
