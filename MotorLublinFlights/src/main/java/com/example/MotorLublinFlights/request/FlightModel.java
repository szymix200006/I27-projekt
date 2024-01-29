package com.example.MotorLublinFlights.request;

import lombok.Data;

public interface FlightModel {
    long getId();
    String getArriveTime();
    String getDepartureTime();
    String getArrive();
    String getDeparture();
}
