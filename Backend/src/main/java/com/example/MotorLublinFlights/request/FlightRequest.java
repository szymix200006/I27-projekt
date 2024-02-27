package com.example.MotorLublinFlights.request;

import com.example.MotorLublinFlights.entity.Airport;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class FlightRequest {
    private String destination;
    private String start;
    private String arriveTime;
    private String departureTime;


}
