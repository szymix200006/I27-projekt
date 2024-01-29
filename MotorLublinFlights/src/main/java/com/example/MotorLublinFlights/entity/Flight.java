package com.example.MotorLublinFlights.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "Flight")
@Builder
@ToString
@AllArgsConstructor
public class Flight {
    @Id
    @GeneratedValue(generator = "id_seq")
    @SequenceGenerator(name = "id_seq", sequenceName = "id_sequence", initialValue = 10, allocationSize = 1)

    private long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "planeId", referencedColumnName = "number")
    private Plane planeId;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "arrive", referencedColumnName = "id")
    private Airport arrive;
    private String arriveTime;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "departure", referencedColumnName = "id")
    private Airport departure;
    private String departureTime;
    @Column(length = 3)
    private int gate;
    @Column(length = 1)
    private String terminal;

    @JsonIgnore
    @OneToMany(mappedBy = "flightId")
    private Set<Ticket> enrolledFlights = new HashSet<>();

    public Flight(long id, Plane planeId, Airport arrive, String arriveTime, Airport departure, String departureTime, int gate, String terminal) {
        this.id = id;
        this.planeId = planeId;
        this.arrive = arrive;
        this.arriveTime = arriveTime;
        this.departure = departure;
        this.departureTime = departureTime;
        this.gate = gate;
        this.terminal = terminal;
    }

    public Flight() {
    }

    public Set<Ticket> getEnrolledFlights() {
        return enrolledFlights;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Plane getPlaneId() {
        return planeId;
    }

    public void setPlaneId(Plane planeId) {
        this.planeId = planeId;
    }

    public Airport getArrive() {
        return arrive;
    }

    public void setArrive(Airport arrive) {
        this.arrive = arrive;
    }

    public String getArriveTime() {
        return arriveTime;
    }

    public void setArriveTime(String arriveTime) {
        this.arriveTime = arriveTime;
    }

    public Airport getDeparture() {
        return departure;
    }

    public void setDeparture(Airport departure) {
        this.departure = departure;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public int getGate() {
        return gate;
    }

    public void setGate(int gate) {
        this.gate = gate;
    }

    public String getTerminal() {
        return terminal;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }
}
