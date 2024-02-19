package com.example.MotorLublinFlights.request;

import com.example.MotorLublinFlights.enums.Classs;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatBody {
    private boolean taken;
    private long number;
    private Classs seatClass;
    private int price;
}
