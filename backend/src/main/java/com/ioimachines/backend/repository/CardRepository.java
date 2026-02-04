package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findAllByOrderBySortOrderAsc();
    java.util.Optional<Card> findBySortOrder(Integer sortOrder);
}
