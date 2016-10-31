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
package com.todo.backend.repository.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;

import com.todo.backend.model.*;
import com.todo.backend.model.enumeration.*;
import com.todo.backend.repository.UserRepositoryCustom;

import com.querydsl.jpa.JPQLQueryFactory;


public class UserRepositoryImpl implements UserRepositoryCustom {

    private final Logger log = LoggerFactory.getLogger(UserRepositoryImpl.class);

    @Inject
    private JPQLQueryFactory factory;

    @Override
    public List<User> findByFirstName(String firstName) {
        log.trace(".findByFirstName(firstName: {})", firstName);
        final QUser user = QUser.user;
        return factory.select(user).from(user).where(user.firstName.eq(firstName)).fetch();
    }

    @Override
    public List<User> findByLastName(String lastName) {
        log.trace(".findByLastName(lastName: {})", lastName);
        final QUser user = QUser.user;
        return factory.select(user).from(user).where(user.lastName.eq(lastName)).fetch();
    }

    @Override
    public List<User> findByRole(UserRole role) {
        log.trace(".findByRole(role: {})", role);
        final QUser user = QUser.user;
        return factory.select(user).from(user).where(user.role.eq(role)).fetch();
    }

    @Override
    public Optional<User> findByUsername(String username) {
        log.trace(".findByUsername(username: {})", username);
        final QUser user = QUser.user;
        return Optional.ofNullable(factory.select(user).from(user).where(user.username.eq(username)).fetchOne());
    }

    @Override
    public List<User> findByPasswordHash(String passwordHash) {
        log.trace(".findByPasswordHash(passwordHash)");
        final QUser user = QUser.user;
        return factory.select(user).from(user).where(user.passwordHash.eq(passwordHash)).fetch();
    }

    @Override
    public List<User> users() {
        log.trace(".users()");
        final QUser user = QUser.user;
        return factory.select(user).from(user).fetch();
    }

}
