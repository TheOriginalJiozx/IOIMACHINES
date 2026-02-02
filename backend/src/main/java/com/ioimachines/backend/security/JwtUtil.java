package com.ioimachines.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ioimachines.backend.model.Admins;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final Algorithm algorithm;
    private final JWTVerifier verifier;

    public JwtUtil(@Value("${jwt.secret:change_this_secret}") String secret) {
        this.algorithm = Algorithm.HMAC256(secret);
        this.verifier = JWT.require(algorithm).build();
    }

    public String generateToken(Admins admin) {
        return JWT.create()
                .withSubject(admin.id.toString())
                .withClaim("email", admin.email)
                .withIssuedAt(new Date())
                .sign(algorithm);
    }

    public DecodedJWT verify(String token) {
        return verifier.verify(token);
    }
}
