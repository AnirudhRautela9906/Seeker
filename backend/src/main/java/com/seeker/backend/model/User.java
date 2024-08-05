package com.seeker.backend.model;

import jakarta.persistence.*;

import lombok.Data;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
//    @NotBlank(message = "Email should not be blank")
    private String email;

    //    @NotBlank(message = "Name should not be blank")
    private String name;

    //    @NotBlank(message = "Password should not be blank")
    private String password;

    private Long aadhar;

    private Integer age;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinTable(
//            name = "job_applications",
//            joinColumns = @JoinColumn(name = "user_email"),
//            inverseJoinColumns = @JoinColumn(name = "job_id")
//    )
    private List<Job> jobsApplied = new ArrayList<>();

    @OneToMany(mappedBy = "creator", fetch =  FetchType.EAGER,cascade = CascadeType.ALL)
    private List<Job> jobsPosted = new ArrayList<>();

    @OneToMany(mappedBy = "assignedUser")
    private Set<Job> assignedJobs;

    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

}
