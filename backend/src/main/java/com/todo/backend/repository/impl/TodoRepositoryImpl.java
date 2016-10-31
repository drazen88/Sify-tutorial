package com.todo.backend.repository.impl;

import java.time.*;
import java.util.List;

import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;

import com.todo.backend.model.*;
import com.todo.backend.model.enumeration.*;
import com.todo.backend.repository.TodoRepositoryCustom;
import com.todo.backend.repository.tuple.*;

import com.querydsl.jpa.JPQLQueryFactory;


public class TodoRepositoryImpl implements TodoRepositoryCustom {

    private final Logger log = LoggerFactory.getLogger(TodoRepositoryImpl.class);

    @Inject
    private JPQLQueryFactory factory;

    @Override
    public List<Todo> findByUser(Long userId) {
        log.trace(".findByUser(userId: {})", userId);
        final QTodo todo = QTodo.todo;
        return factory.select(todo).from(todo).where(todo.user.id.eq(userId)).fetch();
    }

    @Override
    public List<Todo> findByTask(String task) {
        log.trace(".findByTask(task: {})", task);
        final QTodo todo = QTodo.todo;
        return factory.select(todo).from(todo).where(todo.task.eq(task)).fetch();
    }

    @Override
    public List<Todo> findByDate(ZonedDateTime date) {
        log.trace(".findByDate(date: {})", date);
        final QTodo todo = QTodo.todo;
        return factory.select(todo).from(todo).where(todo.date.eq(date)).fetch();
    }

    @Override
    public List<Todo> findByStatus(Status status) {
        log.trace(".findByStatus(status: {})", status);
        final QTodo todo = QTodo.todo;
        return factory.select(todo).from(todo).where(todo.status.eq(status)).fetch();
    }

    @Override
    public List<Todo> userTodos(Long userId) {
        log.trace(".userTodos(userId: {})", userId);
        final QTodo todo = QTodo.todo;
        return factory.select(todo).from(todo).where(todo.user.id.eq(userId)).fetch();
    }

    @Override
    public List<TodoUserTuple> todos() {
        log.trace(".todos()");
        final QUser user = QUser.user;
        final QTodo todo = QTodo.todo;
        return factory.select(user, todo).from(todo).innerJoin(todo.user, user).fetch().stream().map(t -> new TodoUserTuple(t.get(todo), t.get(user))).collect(Collectors.toList());
    }

}
