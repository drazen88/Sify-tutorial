package com.todo.backend.web.rest.dto;

import java.io.Serializable;

import javax.validation.constraints.*;


public class ChangePasswordRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(min = 6, max = 32)
    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$")
    private String oldPassword;

    @NotNull
    @Size(min = 6, max = 32)
    @Pattern(regexp = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$")
    private String newPassword;

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final ChangePasswordRequest other = (ChangePasswordRequest) obj;
        if ((oldPassword == null && other.oldPassword != null) || !oldPassword.equals(other.oldPassword))
            return false;
        if ((newPassword == null && other.newPassword != null) || !newPassword.equals(other.newPassword))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((oldPassword == null) ? 0 : oldPassword.hashCode());
        result = prime * result + ((newPassword == null) ? 0 : newPassword.hashCode());
        return result;
    }

    @Override
    public String toString() {
        return "ChangePasswordRequest";
    }

}
