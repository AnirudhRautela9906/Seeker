package com.seeker.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @Column(name = "job_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_email")
    private User creator;

    private Double price;

    @OneToOne(cascade = CascadeType.ALL )
    private Address jobLocation;

    @ManyToOne
    @JoinColumn(name = "assigned_user_email")
    private User assignedUser;

    @Column(name = "post_time")
    private LocalDateTime jobPostDateTime = LocalDateTime.now();

    @ManyToMany(mappedBy = "jobsApplied", fetch = FetchType.EAGER)
    private List<User> appliedUsers = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private JobStatus status;
}
