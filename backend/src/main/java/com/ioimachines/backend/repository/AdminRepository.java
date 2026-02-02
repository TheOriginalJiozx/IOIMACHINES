package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.Admins;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admins, Long> {
	Optional<Admins> findByEmail(String email);
}
