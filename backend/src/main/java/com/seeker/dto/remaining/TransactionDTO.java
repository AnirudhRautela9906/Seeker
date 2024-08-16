package com.seeker.dto.remaining;

import java.time.LocalDateTime;

import com.seeker.dto.job.JobTransactionDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {
	
	private Long id;
	
	private String transactionCode;
	
	private Double price;
	
	private LocalDateTime transactionTime;
	
	private JobTransactionDTO job;
	
}
