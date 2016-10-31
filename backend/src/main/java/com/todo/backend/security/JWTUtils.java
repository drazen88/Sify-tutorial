package com.todo.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Collections;
import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;

import com.todo.backend.model.enumeration.UserRole;


public final class JWTUtils {

    // one month in seconds, adjust as necessary
    private static final long VALIDITY = 30 * 24 * 60 * 60;

    private static final String AUTHORITIES_KEY = "auth";

    private JWTUtils() {
    }

    public static String createToken(Long userId, UserRole userRole, String secretKey) {

        final ZonedDateTime validity = ZonedDateTime.now(ZoneId.of("UTC")).plusSeconds(VALIDITY);

        return Jwts.builder().setSubject(userId.toString()).claim(AUTHORITIES_KEY, userRole.name()).signWith(SignatureAlgorithm.HS512, secretKey).setExpiration(Date.from(validity.toInstant()))
                .compact();
    }

    public static Authentication getAuthentication(String token, String secretKey) {

        final Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        final Long userId = Long.valueOf(claims.getSubject());
        final String userRole = claims.get(AUTHORITIES_KEY).toString();

        return new PreAuthenticatedAuthenticationToken(userId, null, Collections.singletonList(new SimpleGrantedAuthority(userRole)));
    }

}
