package com.example.MotorLublinFlights.exceptions;

public class BadRequestError extends RuntimeException{
    private static final long serialVersionUID = 1;

    public BadRequestError(String message) {
        super(message);
    }
}
