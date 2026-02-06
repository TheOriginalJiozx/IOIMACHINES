package com.ioimachines.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Lob;
import java.time.Instant;

@Entity
@Table(name = "case_studies")
public class CaseStudy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slug;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(name = "content_json", columnDefinition = "TEXT")
    private String contentJson;

    @Column(name = "solution_title")
    private String solutionTitle;

    @Lob
    @Column(name = "solution_content_json", columnDefinition = "TEXT")
    private String solutionContentJson;

    @Column(nullable = false)
    private Instant createdAt = Instant.now();

    public CaseStudy() {}

    public CaseStudy(String slug, String title, String contentJson, String solutionTitle, String solutionContentJson) {
        this.slug = slug;
        this.title = title;
        this.contentJson = contentJson;
        this.solutionTitle = solutionTitle;
        this.solutionContentJson = solutionContentJson;
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContentJson() { return contentJson; }
    public void setContentJson(String contentJson) { this.contentJson = contentJson; }

    public String getSolutionTitle() { return solutionTitle; }
    public void setSolutionTitle(String solutionTitle) { this.solutionTitle = solutionTitle; }

    public String getSolutionContentJson() { return solutionContentJson; }
    public void setSolutionContentJson(String solutionContentJson) { this.solutionContentJson = solutionContentJson; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
