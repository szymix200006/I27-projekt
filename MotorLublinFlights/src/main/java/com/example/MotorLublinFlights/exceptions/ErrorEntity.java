package com.example.MotorLublinFlights.exceptions;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Data
public class ErrorEntity {
    private HttpStatus statusCode;
    private String message;
    private Date timestamp;
}
