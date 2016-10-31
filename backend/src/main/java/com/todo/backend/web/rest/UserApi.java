package com.todo.backend.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import com.codahale.metrics.annotation.Timed;
import javax.validation.Valid;
import com.todo.backend.model.*;
import com.todo.backend.web.rest.dto.*;

import com.todo.backend.repository.*;


@RestController
@RequestMapping("/api/")
public class UserApi {

    private final Logger log = LoggerFactory.getLogger(UserApi.class);

    @Inject
    private TodoRepository todoRepository;

    @Inject
    private UserRepository userRepository;

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<ReadUserResponse> readUser(@PathVariable Long id) {
        log.debug("GET /user/{}", id);
        final Optional<User> result = Optional.ofNullable(userRepository.findOne(id));
        if (result.isPresent()) {
            return ResponseEntity.ok().body(convertToReadUserResponse(result.get()));
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<CreateUserResponse> createUser(@Valid @RequestBody CreateUserRequest request) throws URISyntaxException {
        log.debug("POST /user {}", request);
        final User user = convertToUser(request);
        final User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + result.getId())).body(convertToCreateUserResponse(result));
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<UpdateUserResponse> updateUser(@PathVariable Long id, @Valid @RequestBody RestUpdateUserRequest request) {
        log.debug("PUT /user/{} {}", id, request);
        final User user = convertToUser(id, request);
        final User result = userRepository.save(user);
        return ResponseEntity.ok().body(convertToUpdateUserResponse(result));
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        log.debug("DELETE /user/{}", id);
        userRepository.delete(id);
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UsersResponse>> users() {
        log.debug("GET /users");
        final List<User> result = userRepository.users();
        return ResponseEntity.ok().body(result.stream().map(this::convertToUsersResponse).collect(Collectors.toList()));
    }

    @RequestMapping(value = "/user-todos", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    @Transactional(readOnly = true)
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<UserTodosResponse>> userTodos(@RequestParam("userId") Long userId) {
        log.debug("GET /user-todos");
        final List<Todo> result = todoRepository.userTodos(userId);
        return ResponseEntity.ok().body(result.stream().map(this::convertToUserTodosResponse).collect(Collectors.toList()));
    }

    private ReadUserResponse convertToReadUserResponse(User model) {
        final ReadUserResponse dto = new ReadUserResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        dto.setPasswordHash(model.getPasswordHash());
        return dto;
    }

    private User convertToUser(CreateUserRequest dto) {
        final User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setRole(dto.getRole());
        user.setUsername(dto.getUsername());
        user.setPasswordHash(dto.getPasswordHash());
        return user;
    }

    private CreateUserResponse convertToCreateUserResponse(User model) {
        final CreateUserResponse dto = new CreateUserResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        dto.setPasswordHash(model.getPasswordHash());
        return dto;
    }

    private User convertToUser(Long id, RestUpdateUserRequest dto) {
        final User user = new User();
        user.setId(id);
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setRole(dto.getRole());
        user.setUsername(dto.getUsername());
        user.setPasswordHash(dto.getPasswordHash());
        return user;
    }

    private UpdateUserResponse convertToUpdateUserResponse(User model) {
        final UpdateUserResponse dto = new UpdateUserResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        dto.setPasswordHash(model.getPasswordHash());
        return dto;
    }

    private UsersResponse convertToUsersResponse(User model) {
        final UsersResponse dto = new UsersResponse();
        dto.setId(model.getId());
        dto.setFirstName(model.getFirstName());
        dto.setLastName(model.getLastName());
        dto.setRole(model.getRole());
        dto.setUsername(model.getUsername());
        dto.setPasswordHash(model.getPasswordHash());
        return dto;
    }

    private UserTodosResponse convertToUserTodosResponse(Todo model) {
        final UserTodosResponse dto = new UserTodosResponse();
        dto.setId(model.getId());
        dto.setUserId(model.getUser().getId());
        dto.setTask(model.getTask());
        dto.setDate(model.getDate());
        dto.setStatus(model.getStatus());
        return dto;
    }
}
