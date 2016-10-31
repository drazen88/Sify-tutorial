package com.todo.backend.model;

import java.io.Serializable;

import java.time.*;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.todo.backend.model.enumeration.*;


@Entity
@Table(name = "Todo")
public class Todo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "task")
    private String task;

    @NotNull
    @Column(name = "date")
    private ZonedDateTime date;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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
        final Todo other = (Todo) obj;
        if ((id == null && other.id != null) || !id.equals(other.id))
            return false;
        if ((user == null && other.user != null) || !user.equals(other.user))
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
        result = prime * result + ((user == null) ? 0 : user.hashCode());
        result = prime * result + ((task == null) ? 0 : task.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "Todo[" + "id=" + id + ", user=" + user + ", task=" + task + ", date=" + date + ", status=" + status + "]";
    }

}
