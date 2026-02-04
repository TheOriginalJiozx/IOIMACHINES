package com.ioimachines.backend.repository;

import com.ioimachines.backend.model.ModalText;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ModalTextRepository extends JpaRepository<ModalText, Long> {
    Optional<ModalText> findByCardId(Long cardId);
}
