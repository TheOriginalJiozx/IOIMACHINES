package com.ioimachines.backend.tools;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Small utility to create an admin user in the database.
 *
 * Usage (from repo root):
 * mvn -pl backend -DskipTests package exec:java -Dexec.mainClass="com.ioimachines.backend.tools.CreateAdmin" -Dexec.args="mc@ioimachines.com ioimachines1234"
 *
 * The tool will also read environment variables if args are omitted:
 * - JDBC_DATABASE_URL
 * - JDBC_DATABASE_USERNAME
 * - JDBC_DATABASE_PASSWORD
 *
 * It will create the `admins` table if it doesn't exist and insert the admin
 * if the email is not already present.
 */
public class CreateAdmin {
    public static void main(String[] args) throws Exception {
        // Default to requested credentials if no args provided
        String email = args.length > 0 ? args[0] : "mc@ioimachines.com";
        String password = args.length > 1 ? args[1] : "ioimachines1234";

        String jdbcUrl = "jdbc:mysql://ioidatabase.mysql.database.azure.com:3306/ioi_machines?sslMode=REQUIRED&serverTimezone=UTC";
        String dbUser = "ioiroot";
        String dbPass = "Machines1234!";

        if (email == null || password == null) {
            System.err.println("Usage: CreateAdmin <email> <password>\nOr set ADMIN_EMAIL and ADMIN_PASSWORD env vars.");
            System.exit(1);
        }
        if (jdbcUrl == null || dbUser == null) {
            System.err.println("Missing JDBC_DATABASE_URL or JDBC_DATABASE_USERNAME env vars.\nSet your DB connection info as environment variables.");
            System.exit(1);
        }

        System.out.println("Connecting to: " + jdbcUrl + " as " + dbUser);

        try (Connection conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPass)) {
            conn.setAutoCommit(true);

            // Create table if missing
            String create = "CREATE TABLE IF NOT EXISTS admins (" +
                    "id BIGINT AUTO_INCREMENT PRIMARY KEY, " +
                    "email VARCHAR(255) NOT NULL UNIQUE, " +
                    "password VARCHAR(255) NOT NULL, " +
                    "admin TINYINT(1) NOT NULL DEFAULT 0" +
                    ")";
            try (Statement s = conn.createStatement()) {
                s.execute(create);
            }

            // Check existing
            try (PreparedStatement ps = conn.prepareStatement("SELECT id FROM admins WHERE email = ?")) {
                ps.setString(1, email);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        System.out.println("Admin already exists with email: " + email + ". id=" + rs.getLong("id"));
                        return;
                    }
                }
            }

            // Hash password and insert
            BCryptPasswordEncoder enc = new BCryptPasswordEncoder();
            String hashed = enc.encode(password);

            try (PreparedStatement ins = conn.prepareStatement("INSERT INTO admins (email, password, admin) VALUES (?, ?, ?)")) {
                ins.setString(1, email);
                ins.setString(2, hashed);
                ins.setInt(3, 1);
                int updated = ins.executeUpdate();
                if (updated > 0) {
                    System.out.println("Created admin: " + email);
                } else {
                    System.err.println("Insert did not affect any rows.");
                }
            }
        }
    }
}
