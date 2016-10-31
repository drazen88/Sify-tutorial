package com.todo.backend.web.rest.dto;

import java.io.Serializable;

import java.time.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.*;

import com.todo.backend.model.enumeration.*;


public class UpdateTodoResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    private Long id;

    @NotNull
    private Long userId;

    @NotNull
    @Size(min = 1, max = 255)
    private String task;

    @NotNull
    private ZonedDateTime date;

    @NotNull
    private Status status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final UpdateTodoResponse other = (UpdateTodoResponse) obj;
        if ((id == null && other.id != null) || !id.equals(other.id))
            return false;
        if ((userId == null && other.userId != null) || !userId.equals(other.userId))
            return false;
        if ((task == null && other.task != null) || !task.equals(other.task))
            return false;
        if ((date == null && other.date != null) || !date.equals(other.date))
            return false;
        if ((status == null && other.status != null) || !status.equals(other.status))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((userId == null) ? 0 : userId.hashCode());
        result = prime * result + ((task == null) ? 0 : task.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "UpdateTodoResponse[" + "id=" + id + ", userId=" + userId + ", task=" + task + ", date=" + date + ", status=" + status + "]";
    }

}
