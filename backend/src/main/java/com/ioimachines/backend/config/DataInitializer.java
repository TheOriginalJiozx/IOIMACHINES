package com.ioimachines.backend.config;

import com.ioimachines.backend.model.SiteSection;
import com.ioimachines.backend.repository.SiteSectionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final SiteSectionRepository repo;

    public DataInitializer(SiteSectionRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {
        seedIfMissing("about-mission", "Our Mission", defaultMissionContent());
        seedIfMissing("about-why", "Why Choose Us", defaultWhyContent());
    }

    private void seedIfMissing(String key, String title, String contentJson) {
        repo.findByKey(key).orElseGet(() -> {
            SiteSection s = new SiteSection(key, title, contentJson, "", "", "", "");
            return repo.save(s);
        });
    }

    private String defaultMissionContent() {
        // JSON with intro array: image + paragraph
        return "{\"intro\":[{" +
            "\"_id\":\"init-mission-image\",\"type\":\"image\",\"src\":\"/about_us1.jpg\",\"alt\":\"Our Mission image\"},{" +
            "\"_id\":\"init-mission-p\",\"type\":\"paragraph\",\"text\":\"Our mission is to empower manufacturers with reliable, AI-driven machine vision systems that detect defects early, reduce waste, and increase throughput. We combine advanced computer vision, optimized hardware, and seamless integration to deliver turnkey solutions that work on the factory floor today and scale for tomorrow.\"}]}";
    }

    private String defaultWhyContent() {
        return "{\"intro\":[{" +
            "\"_id\":\"init-why-image\",\"type\":\"image\",\"src\":\"/about_us2.jpg\",\"alt\":\"Why Choose Us image\"},{" +
            "\"_id\":\"init-why-p1\",\"type\":\"paragraph\",\"text\":\"IOIMACHINES develops and manufactures custom machine vision solutions for vision-based quality control on the factory floor.\"},{" +
            "\"_id\":\"init-why-p2\",\"type\":\"paragraph\",\"text\":\"Our solutions are based on innovative methods of feature detection and state-of-the-art artificial intelligence.\"},{" +
            "\"_id\":\"init-why-list1\",\"type\":\"paragraph\",\"text\":\"Our vision software runs on: Standard industrial vision computers; Proprietary vision computers supplied with FPGA-based accelerators.\"},{" +
            "\"_id\":\"init-why-list2\",\"type\":\"paragraph\",\"text\":\"We also provide custom turnkey solutions including: Industrial 2D cameras; 3D sensors for accurate measurements of defects with 3D illumination units; Automation systems to present product for inspection.\"}]}";
    }
}
