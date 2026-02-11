package com.ioimachines.backend.util;

import com.ioimachines.backend.model.AdminSession;
import com.ioimachines.backend.repository.AdminSessionRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.Base64;

@Component
public class AdminSessionStore {
    private final AdminSessionRepository repo;
    private final SecureRandom random = new SecureRandom();
    private final long defaultTtlSeconds;

    public AdminSessionStore(AdminSessionRepository repo, @Value("${admin.session.ttl:0}") long defaultTtlSeconds) {
        this.repo = repo;
        this.defaultTtlSeconds = defaultTtlSeconds;
    }

    public String createSession(long adminId) {
        byte[] bytes = new byte[32];
        random.nextBytes(bytes);
        String token = Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
        Long expiration = null;
        if (defaultTtlSeconds > 0) {
            expiration = Instant.now().getEpochSecond() + defaultTtlSeconds;
        }
        AdminSession session = new AdminSession(token, adminId, expiration);
        repo.save(session);
        return token;
    }

    public Long validate(String token) {
        if (token == null)
            return null;
        return repo.findById(token).map(session -> {
            if (session.expiresAt != null) {
                if (Instant.now().getEpochSecond() > session.expiresAt) {
                    repo.deleteById(token);
                    return null;
                }
            }
            return session.adminId;
        }).orElse(null);
    }

    public void revoke(String token) {
        if (token == null)
            return;
        repo.deleteById(token);
    }
}
