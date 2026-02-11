package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.ContactSection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactSectionRepository extends JpaRepository<ContactSection, Long> {
    Optional<ContactSection> findByKey(String key);
}
