package com.ioimachines.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin_sessions")
public class AdminSession {
    @Id
    @Column(length = 128)
    public String token;

    public Long adminId;

    public Long expiresAt;

    public AdminSession() {}

    public AdminSession(String token, Long adminId, Long expiresAt) {
        this.token = token;
        this.adminId = adminId;
        this.expiresAt = expiresAt;
    }
}
