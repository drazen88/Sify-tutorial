package com.todo.backend.repository;

import java.time.*;
import java.util.List;

import com.todo.backend.model.*;
import com.todo.backend.model.enumeration.*;
import com.todo.backend.repository.tuple.*;


public interface TodoRepositoryCustom {

    List<Todo> findByUser(Long userId);

    List<Todo> findByTask(String task);

    List<Todo> findByDate(ZonedDateTime date);

    List<Todo> findByStatus(Status status);

    List<Todo> userTodos(Long userId);

    List<TodoUserTuple> todos();

}
