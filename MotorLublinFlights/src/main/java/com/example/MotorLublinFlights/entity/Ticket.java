package com.example.MotorLublinFlights.entity;

import com.example.MotorLublinFlights.enums.Classs;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

@Entity(name = "Ticket")
@Builder
@ToString
public class Ticket {
    @Id
    @GeneratedValue(generator = "id_seq")
    @SequenceGenerator(name = "id_seq", sequenceName = "id_sequence", initialValue = 10, allocationSize = 1)

    private long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User userId;
    @Column(columnDefinition = "DECIMAL(15,2)")
    private float price;
    @Column(length = 5)
    private int seatNumber;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "flightId", referencedColumnName = "id")
    private Flight flightId;
    private Classs classs;



    public Ticket(long id, User userId, float price, int seatNumber, Flight flightId, Classs classs) {
        this.id = id;
        this.userId = userId;
        this.price = price;
        this.seatNumber = seatNumber;
        this.flightId = flightId;
        this.classs = classs;
    }

    public Ticket() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    public Flight getFlightId() {
        return flightId;
    }

    public void setFlightId(Flight flightId) {
        this.flightId = flightId;
    }

    public Classs getClasss() {
        return classs;
    }

    public void setClasss(Classs classs) {
        this.classs = classs;
    }
}
