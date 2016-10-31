package com.todo.backend.web.rest.exception;

import javax.annotation.Nonnull;


public class FieldError {

    private final String requestObject;
    private final String field;
    private final String code;

    public FieldError(@Nonnull String requestObject, @Nonnull String field, @Nonnull String code) {
        this.requestObject = requestObject;
        this.field = field;
        this.code = code;
    }

    public String getRequestObject() {
        return requestObject;
    }

    public String getField() {
        return field;
    }

    public String getCode() {
        return code;
    }

}
