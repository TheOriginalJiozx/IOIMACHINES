package com.ioimachines.backend.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "site_sections", uniqueConstraints = {@UniqueConstraint(columnNames = {"section_key"})})
public class ContactSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "section_key", nullable = false)
    private String key;

    private String title;

    @Lob
    @Column(name = "content_json", columnDefinition = "TEXT")
    private String contentJson;

    @Lob
    @Column(name = "email_json", columnDefinition = "TEXT")
    private String emailJson;

    @Lob
    @Column(name = "phone_json", columnDefinition = "TEXT")
    private String phoneJson;

    @Lob
    @Column(name = "address_json", columnDefinition = "TEXT")
    private String addressJson;

    @Lob
    @Column(name = "timing_json", columnDefinition = "TEXT")
    private String timingJson;

    private Instant createdAt = Instant.now();

    public ContactSection() {}

    public ContactSection(String key, String title, String contentJson, String emailJson, String phoneJson, String addressJson, String timingJson) {
        this.key = key;
        this.title = title;
        this.contentJson = contentJson;
        this.addressJson = addressJson;
        this.emailJson = emailJson;
        this.phoneJson = phoneJson;
        this.timingJson = timingJson;
        this.createdAt = Instant.now();
    }

    public Long getId() { return id; }
    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContentJson() { return contentJson; }
    public void setContentJson(String contentJson) { this.contentJson = contentJson; }
    public String getEmailJson() { return emailJson; }
    public void setEmailJson(String emailJson) { this.emailJson = emailJson; }
    public String getPhoneJson() { return phoneJson; }
    public void setPhoneJson(String phoneJson) { this.phoneJson = phoneJson; }
    public String getAddressJson() { return addressJson; }
    public void setAddressJson(String addressJson) { this.addressJson = addressJson; }
    public String getTimingJson() { return timingJson; }
    public void setTimingJson(String timingJson) { this.timingJson = timingJson; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
