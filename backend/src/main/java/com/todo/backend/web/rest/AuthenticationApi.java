package com.todo.backend.web.rest;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import springfox.documentation.annotations.ApiIgnore;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.codahale.metrics.annotation.Timed;
import javax.validation.Valid;
import com.todo.backend.model.*;
import com.todo.backend.web.rest.dto.*;

import com.todo.backend.service.*;


@RestController
@RequestMapping("/api/")
public class AuthenticationApi {

    private final Logger log = LoggerFactory.getLogger(AuthenticationApi.class);

    @Inject
    private UserService userService;

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    public ResponseEntity<SignUpResponse> signUp(@Valid @RequestBody SignUpRequest request) {
        log.debug("POST /sign-up {}", request);
        final User user = userService.signUp(request.getFirstName(), request.getLastName(), request.getUsername(), request.getPassword());
        return ResponseEntity.ok().body(convertToSignUpResponse(user));
    }

    @RequestMapping(value = "/sign-in", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    public ResponseEntity<SignInResponse> signIn(@Valid @RequestBody SignInRequest request) {
        log.debug("POST /sign-in {}", request);
        final SignInResponse response = userService.signIn(request.getUsername(), request.getPassword());
        return ResponseEntity.ok().body(response);
    }

    @RequestMapping(value = "/change-password", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ChangePasswordResponse> changePassword(@Valid @RequestBody ChangePasswordRequest request, @ApiIgnore @AuthenticationPrincipal Long principalId) {
        log.debug("POST /change-password {}", request);
        final User user = userService.changePassword(principalId, request.getOldPassword(), request.getNewPassword());
        return ResponseEntity.ok().body(convertToChangePasswordResponse(user));
    }

    private SignUpResponse convertToSignUpResponse(User model) {
        final SignUpResponse dto = new SignUpResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        return dto;
    }

    private ChangePasswordResponse convertToChangePasswordResponse(User model) {
        final ChangePasswordResponse dto = new ChangePasswordResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        return dto;
    }
}
