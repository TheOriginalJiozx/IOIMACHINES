package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.AdminSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminSessionRepository extends JpaRepository<AdminSession, String> {
}
