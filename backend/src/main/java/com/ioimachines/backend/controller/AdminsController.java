package com.ioimachines.backend.controller;

import com.ioimachines.backend.model.Admins;
import com.ioimachines.backend.repository.AdminRepository;
import java.util.Map;
import java.util.HashMap;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.ioimachines.backend.security.JwtUtil;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.net.URI;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin
public class AdminsController {

    private final AdminRepository adminRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final JwtUtil jwtUtil;

    public AdminsController(AdminRepository adminRepository, JwtUtil jwtUtil) {
        this.adminRepository = adminRepository;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admins> getAdmin(@PathVariable Long id) {
        return adminRepository.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        return adminRepository.findByEmail(req.email).map(admin -> {
            if (admin.password != null && passwordEncoder.matches(req.password, admin.password)) {

                admin.password = null;
                String token = jwtUtil.generateToken(admin);
                return ResponseEntity.ok(new LoginResponse(token, admin));
            }
            return ResponseEntity.status(401).body("invalid credentials");
        }).orElseGet(() -> ResponseEntity.status(404).body("admin not found"));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader(name = "Authorization", required = false) String auth) {
        if (auth == null || !auth.startsWith("Bearer ")) return ResponseEntity.status(401).body("missing token");
        try {
            String token = auth.substring(7);
            DecodedJWT decoded = jwtUtil.verify(token);
            Long id = Long.valueOf(decoded.getSubject());
            return adminRepository.findById(id).map(admin -> {
                admin.password = null;

                Map<String, Object> out = new HashMap<>();
                out.put("id", admin.id);
                out.put("email", admin.email);
                out.put("admin", admin.admin);
                return ResponseEntity.ok(out);
            }).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(401).body("invalid token");
        }
    }

    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestHeader(name = "Authorization", required = false) String auth, @RequestBody ChangePassword req) {
        if (auth == null || !auth.startsWith("Bearer ")) return ResponseEntity.status(401).body("missing token");
        try {
            String token = auth.substring(7);
            DecodedJWT decoded = jwtUtil.verify(token);
            Long id = Long.valueOf(decoded.getSubject());
            return adminRepository.findById(id).map(admin -> {
                if (admin.password == null || !passwordEncoder.matches(req.currentPassword, admin.password)) {
                    return ResponseEntity.status(400).body("current password incorrect");
                }
                if (req.newPassword == null || req.newPassword.length() < 6) {
                    return ResponseEntity.status(400).body("new password too short");
                }
                admin.password = passwordEncoder.encode(req.newPassword);
                adminRepository.save(admin);
                return ResponseEntity.ok().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(401).body("invalid token");
        }
    }

    @PostMapping("/change-email")
    public ResponseEntity<?> changeEmail(@RequestHeader(name = "Authorization", required = false) String auth, @RequestBody ChangeEmail req) {
        if (auth == null || !auth.startsWith("Bearer ")) return ResponseEntity.status(401).body("missing token");
        try {
            String token = auth.substring(7);
            DecodedJWT decoded = jwtUtil.verify(token);
            Long id = Long.valueOf(decoded.getSubject());
            return adminRepository.findById(id).map(admin -> {
                if (req.newEmail == null || !req.newEmail.contains("@")) return ResponseEntity.status(400).body("invalid email");
                admin.email = req.newEmail;
                adminRepository.save(admin);
                return ResponseEntity.ok().build();
            }).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            return ResponseEntity.status(401).body("invalid token");
        }
    }

    public static class LoginRequest {
        public String email;
        public String password;
    }

    public static class LoginResponse {
        public String token;
        public Admins admin;
        public LoginResponse(String token, Admins admin) { this.token = token; this.admin = admin; }
    }

    public static class ChangePassword {
        public String currentPassword;
        public String newPassword;
    }

    public static class ChangeEmail {
        public String newEmail;
    }
}
