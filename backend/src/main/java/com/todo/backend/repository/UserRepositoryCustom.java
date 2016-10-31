package com.todo.backend.repository;

import java.util.List;
import java.util.Optional;

import com.todo.backend.model.*;
import com.todo.backend.model.enumeration.*;


public interface UserRepositoryCustom {

    List<User> findByFirstName(String firstName);

    List<User> findByLastName(String lastName);

    List<User> findByRole(UserRole role);

    Optional<User> findByUsername(String username);

    List<User> findByPasswordHash(String passwordHash);

    List<User> users();

}
