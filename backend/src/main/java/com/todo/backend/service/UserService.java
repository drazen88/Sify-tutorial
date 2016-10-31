/**
* Copyright 2016 dryTools doo
* Email: contact@drytools.co
* 
* This file is part of todo.
* 
* todo is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
* 
* todo is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with todo. If not, see <http://www.gnu.org/licenses/>.*
**/
package com.todo.backend.service;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.todo.backend.config.CustomProperties;
import com.todo.backend.model.*;
import com.todo.backend.model.enumeration.*;
import com.todo.backend.repository.*;
import com.todo.backend.web.rest.dto.*;
import com.todo.backend.web.rest.exception.*;
import com.todo.backend.security.JWTUtils;


@Service
public class UserService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);

    @Inject
    private CustomProperties customProperties;

    @Inject
    private PasswordEncoder passwordEncoder;

    @Inject
    private UserRepository userRepository;

    public User signUp(String firstName, String lastName, String username, String password) {
        log.debug("signUp(firstName: {}, lastName: {}, username: {})", firstName, lastName, username);

        final User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);
        user.setRole(UserRole.ADMIN);
        user.setPasswordHash(passwordEncoder.encode(password));
        userRepository.save(user);
        return user;
    }

    public SignInResponse signIn(String username, String password) {

        log.debug("signIn(username: {})", username);

        final User user = userRepository.findByUsername(username).orElseThrow(() -> new AuthenticationError("credentials.invalid", "Credentials are invalid!"));
        if (!passwordEncoder.matches(password, user.getPasswordHash()))
            throw new AuthenticationError("credentials.invalid", "Credentials are invalid!");

        final SignInResponse response = new SignInResponse();
        final String accessToken = JWTUtils.createToken(user.getId(), user.getRole(), customProperties.getSecretKey());
        response.setAccessToken(accessToken);
        response.setId(user.getId());
        response.setFirstName(user.getFirstName());
        response.setLastName(user.getLastName());
        response.setRole(user.getRole());
        response.setUsername(user.getUsername());
        return response;
    }

    public User changePassword(Long userId, String oldPassword, String newPassword) {

        log.debug("changePassword(userId: {})", userId);

        final User user = userRepository.findOne(userId);
        if (user == null) {
            throw new AuthenticationError("credentials.invalid", "Credentials are invalid!");
        }
        if (!passwordEncoder.matches(oldPassword, user.getPasswordHash())) {
            throw new AuthenticationError("credentials.invalid", "Credentials are invalid!");
        }
        user.setPasswordHash(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        return user;
    }

}
