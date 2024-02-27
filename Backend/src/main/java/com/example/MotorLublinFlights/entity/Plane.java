package com.example.MotorLublinFlights.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Entity(name = "Plane")
@Builder
@ToString
@AllArgsConstructor
public class Plane {
    @Valid
    @Id
    @GeneratedValue(generator = "id_seq_plane")
    @SequenceGenerator(name = "id_seq_plane", sequenceName = "id_sequence_plane", initialValue = 1, allocationSize = 1)
    private long number;
    @NotBlank(message = "Name cannot be blank")
    @NotNull(message = "Name cannot be null")
    private String model;
    @Column(length = 5)
    @Min(value = 2, message="At least two seats")
    @NotNull(message = "Seat count cannot be null")
    private int seatCount;
    @NotBlank(message = "Brand cannot be blank")
    @NotNull(message = "Brand cannot be null")
    private String brand;

    @JsonIgnore
    @OneToMany(mappedBy = "planeId")
    private Set<Flight> enrolledPlanes = new HashSet<>();

    public Plane() {
    }

    public Plane(long number, String model, int seatCount, String brand) {
        this.number = number;
        this.model = model;
        this.seatCount = seatCount;
        this.brand = brand;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getSeatCount() {
        return seatCount;
    }

    public void setSeatCount(int seatCount) {
        this.seatCount = seatCount;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
