package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.SiteSection;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SiteSectionRepository extends JpaRepository<SiteSection, Long> {
    Optional<SiteSection> findByKey(String key);
}
