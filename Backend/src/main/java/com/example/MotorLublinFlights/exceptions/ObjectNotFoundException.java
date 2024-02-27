package com.example.MotorLublinFlights.exceptions;

public class ObjectNotFoundException extends RuntimeException{
    private static final long serialVersionUID = 1;

    public ObjectNotFoundException(String message) {
        super(message);
    }
}
