package com.example.MotorLublinFlights.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TicketRequest {
    @Valid
    @NotNull(message = "FlightId cannot be null")
    private long flightId;
}
