package com.todo.backend.web.rest.dto;

import java.io.Serializable;

import javax.validation.constraints.*;


public class SignInRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(min = 3, max = 128)
    private String username;

    @NotNull
    @Size(min = 6, max = 32)
    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final SignInRequest other = (SignInRequest) obj;
        if ((username == null && other.username != null) || !username.equals(other.username))
            return false;
        if ((password == null && other.password != null) || !password.equals(other.password))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((username == null) ? 0 : username.hashCode());
        result = prime * result + ((password == null) ? 0 : password.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "SignInRequest[" + "username=" + username + "]";
    }

}
