package com.example.MotorLublinFlights.request;

import com.example.MotorLublinFlights.enums.Classs;
import lombok.Data;

@Data
public class TicketBodyRequest {
    private long userId;
    private float price;
    private int seatNumber;
    private long flightId;
    private Classs classs;
}
