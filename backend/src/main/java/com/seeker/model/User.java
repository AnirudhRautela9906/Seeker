package com.seeker.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
public class User {

    @Id
    private String email;

    private String name;
        
    private String password;

    private String aadhar;

    private Integer age;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Job> jobsApplied = new ArrayList<>();

    @OneToMany(mappedBy = "creator", fetch =  FetchType.EAGER,cascade = CascadeType.ALL)
    private List<Job> jobsPosted = new ArrayList<>();

    @OneToMany(mappedBy = "assignedUser")
    private Set<Job> assignedJobs;

    @OneToOne(cascade = CascadeType.ALL,mappedBy = "user")
//    @JsonManagedReference
    private Address address;
    
    private String role;

}
