package com.example.MotorLublinFlights.entity;

import com.example.MotorLublinFlights.enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "User")
@Builder
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Valid
    @Id
    @GeneratedValue(generator = "id_seq_user")
    @SequenceGenerator(name = "id_seq_user", sequenceName = "id_sequence_user", initialValue = 1, allocationSize = 1)
    private long id;
    @NotBlank(message = "Email cannot be blank")
    @NotNull(message = "Email cannot be null")
    private String email;
    @NotBlank(message = "Name cannot be blank")
    @NotNull(message = "Name cannot be null")
    private String name;
    @NotBlank(message = "Lastname cannot be blank")
    @NotNull(message = "Lastname cannot be null")
    private String lastName;
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "userId")
    private Set<Ticket> enrolledTickets = new HashSet<>();

   public User(long id, String email, String name, String lastName, Role role) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.role = role;
    }

    public Set<Ticket> getEnrolledTickets() {
        return enrolledTickets;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
