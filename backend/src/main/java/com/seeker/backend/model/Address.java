package com.seeker.backend.model;


import jakarta.persistence.*;

import lombok.Data;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String state;
    private String city;
    private String area;

    @OneToOne(mappedBy = "address" )
    private User user;

    @OneToOne(mappedBy = "jobLocation")
    private Job jobId;
}