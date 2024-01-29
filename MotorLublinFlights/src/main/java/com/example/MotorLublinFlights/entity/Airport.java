package com.example.MotorLublinFlights.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "Airport")
@Builder
@ToString
@AllArgsConstructor
public class Airport {
    @Valid
    @Id
    @GeneratedValue(generator = "id_seq")
    @SequenceGenerator(name = "id_seq", sequenceName = "id_sequence", initialValue = 10, allocationSize = 1)
    private long id;
    @NotBlank(message = "Name cannot be blank")
    @NotNull(message = "Name cannot be null")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "arrive")
    private Set<Flight> enrolledFlightsArrive = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "departure")
    private Set<Flight> enrolledFlightsDeparture = new HashSet<>();

    public Set<Flight> getEnrolledFlightsArrive() {
        return enrolledFlightsArrive;
    }

    public Set<Flight> getEnrolledFlightsDeparture() {
        return enrolledFlightsDeparture;
    }

    public Airport(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Airport() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
