package com.todo.backend.web.rest.exception;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice
public class ExceptionResolver {

    private final Logger log = LoggerFactory.getLogger(ExceptionResolver.class);

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public @ResponseBody ErrorResponse validationException(HttpServletRequest request, MethodArgumentNotValidException exception) {
        if (log.isErrorEnabled()) {
            log.error(exception.getMessage(), exception);
        }
        final List<String> errorCodes = exception.getBindingResult().getFieldErrors().stream().map(e -> String.format("%s.%s.%s", e.getObjectName(), e.getField(), e.getCode()))
                .collect(Collectors.toList());
        return new ErrorResponse(exception.getMessage(), errorCodes);
    }

    @ResponseStatus(value = HttpStatus.CONFLICT)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public @ResponseBody ErrorResponse dataIntegrityException(HttpServletRequest request, DataIntegrityViolationException exception) {
        if (log.isErrorEnabled()) {
            log.error(exception.getMessage(), exception);
        }
        // example: Duplicate entry 'field1-field2' for key 'UNQ_MODE_F1_F2_251F9D'
        final String message = exception.getRootCause().getMessage();
        if (message.contains("'UNQ")) {
            final String constraint = message.substring(message.indexOf("'UNQ") + 1, message.lastIndexOf("'"));
            return new ErrorResponse(ConstraintMapping.getErrorCodeForConstraint(constraint), message);
        }
        return new ErrorResponse(message, Collections.emptyList());
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(AccessDeniedException.class)
    public @ResponseBody ErrorResponse accessDenied(HttpServletRequest request, AccessDeniedException exception) {
        if (log.isErrorEnabled()) {
            log.error(exception.getMessage(), exception);
        }
        return new ErrorResponse("access.denied", "Access is denied!");
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(AuthenticationError.class)
    public @ResponseBody ErrorResponse authenticationError(HttpServletRequest request, AuthenticationError exception) {
        if (log.isErrorEnabled()) {
            log.error(exception.getMessage(), exception);
        }
        return new ErrorResponse(exception.getErrorCode(), exception.getErrorMessage());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    public @ResponseBody ErrorResponse serverError(HttpServletRequest request, Throwable exception) {
        if (log.isErrorEnabled()) {
            log.error(exception.getMessage(), exception);
        }
        return new ErrorResponse(exception.getClass().getSimpleName(), exception.getMessage());
    }
}
