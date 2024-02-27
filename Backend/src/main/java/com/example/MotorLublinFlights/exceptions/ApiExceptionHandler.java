package com.example.MotorLublinFlights.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<ErrorEntity> handleObjectNotFoundException(ObjectNotFoundException ex, WebRequest wb) {
        ErrorEntity errorEntity = new ErrorEntity();

        errorEntity.setStatusCode(HttpStatus.NOT_FOUND);
        errorEntity.setMessage(ex.getMessage());
        errorEntity.setTimestamp(new Date());

        return new ResponseEntity<ErrorEntity>(errorEntity, HttpStatus.NOT_FOUND);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorEntity> handleBadRequestError(MethodArgumentNotValidException ex, WebRequest wb) {
        ErrorEntity errorEntity = new ErrorEntity();

        errorEntity.setStatusCode(HttpStatus.BAD_REQUEST);
        errorEntity.setMessage(ex.getMessage());
        errorEntity.setTimestamp(new Date());

        return new ResponseEntity<ErrorEntity>(errorEntity, HttpStatus.BAD_REQUEST);
    }




}
