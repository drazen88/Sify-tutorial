package com.todo.backend.web.rest.exception;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Nonnull;


public class ErrorResponse {

    private final List<String> errorCodes;
    private final List<FieldError> fieldErrors;
    private final String message;

    public ErrorResponse(@Nonnull List<FieldError> fieldErrors, String message) {
        this.fieldErrors = fieldErrors;
        this.errorCodes = null;
        this.message = message;
    }

    public ErrorResponse(@Nonnull String code, String message) {
        this.fieldErrors = null;
        errorCodes = new LinkedList<String>();
        errorCodes.add(code);
        this.message = message;
    }

    public ErrorResponse(String message, @Nonnull List<String> errorCodes) {
        this.fieldErrors = null;
        this.errorCodes = errorCodes;
        this.message = message;
    }

    public List<String> getErrorCodes() {
        return errorCodes;
    }

    public List<FieldError> getFieldErrors() {
        return fieldErrors;
    }

    public String getMessage() {
        return message;
    }

}
