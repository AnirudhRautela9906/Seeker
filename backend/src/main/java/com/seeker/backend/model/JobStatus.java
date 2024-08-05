package com.seeker.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="job_status")
public enum JobStatus {
    POSTED, ASSIGNED, COMPLETED
}
