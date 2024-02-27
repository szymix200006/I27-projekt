package com.example.MotorLublinFlights.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketResponse {
    private long planeId;
    private SeatBody[] seats;
}
