
package com.todo.backend.repository.tuple;

import com.todo.backend.model.*;


public class TodoUserTuple {

    private final Todo todo;
    private final User user;

    public TodoUserTuple(Todo todo, User user) {
        this.todo = todo;
        this.user = user;
    }

    public Todo getTodo() {
        return todo;
    }

    public User getUser() {
        return user;
    }

}