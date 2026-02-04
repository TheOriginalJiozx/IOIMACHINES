package com.ioimachines.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "modal_texts")
public class ModalText {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "card_id")
    public Long cardId;

    @Column(columnDefinition = "LONGTEXT")
    public String content;

    public ModalText() {}
}
