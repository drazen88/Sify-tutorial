package com.todo.backend.web.rest.dto;

import java.io.Serializable;

import javax.validation.constraints.*;

import com.todo.backend.model.enumeration.*;


public class UpdateUserResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    private Long id;

    @NotNull
    @Size(min = 1, max = 40)
    private String firstName;

    @NotNull
    @Size(min = 1, max = 60)
    private String lastName;

    @NotNull
    private UserRole role;

    @NotNull
    @Size(min = 3, max = 128)
    private String username;

    @NotNull
    @Size(min = 6, max = 128)
    private String passwordHash;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final UpdateUserResponse other = (UpdateUserResponse) obj;
        if ((id == null && other.id != null) || !id.equals(other.id))
            return false;
        if ((firstName == null && other.firstName != null) || !firstName.equals(other.firstName))
            return false;
        if ((lastName == null && other.lastName != null) || !lastName.equals(other.lastName))
            return false;
        if ((role == null && other.role != null) || !role.equals(other.role))
            return false;
        if ((username == null && other.username != null) || !username.equals(other.username))
            return false;
        if ((passwordHash == null && other.passwordHash != null) || !passwordHash.equals(other.passwordHash))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
        result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
        result = prime * result + ((role == null) ? 0 : role.hashCode());
        result = prime * result + ((username == null) ? 0 : username.hashCode());
        result = prime * result + ((passwordHash == null) ? 0 : passwordHash.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "UpdateUserResponse[" + "id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", role=" + role + ", username=" + username + "]";
    }

}
