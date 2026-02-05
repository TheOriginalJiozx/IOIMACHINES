package com.ioimachines.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/config")
public class ConfigController {

    @Value("${app.api.base:}")
    private String apiBase;

    @GetMapping
    public ResponseEntity<?> getConfig() {
        return ResponseEntity.ok(Map.of("apiBase", apiBase == null ? "" : apiBase));
    }
}
