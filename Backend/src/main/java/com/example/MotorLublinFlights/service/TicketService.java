package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.entity.Ticket;
import com.example.MotorLublinFlights.entity.User;
import com.example.MotorLublinFlights.enums.Classs;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.TicketRepository;
import com.example.MotorLublinFlights.request.TicketBodyRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final UserService userService;
    private final FlightService flightService;
    private final PlaneService planeService;
    private final FlightConstants flightConstants = new FlightConstants();

    public List<Ticket> saveTickets(int amount) {
        List<Ticket> ticketsToAdd = new ArrayList<>();

        try {
            for (int i = 0; i < amount; i++) {
                Flight flight = flightService.getRandomFlight();
                Ticket ticket = Ticket.builder()
                        .userId(userService.getRandomUser())
                        .price(flightConstants.getRandomInt(999))
                        .seatNumber(planeService.getPlane(flight.getPlaneId().getNumber()).getSeatCount())
                        .classs(Classs.values()[(int) flightConstants.getRandomInt(Classs.values().length)])
                        .flightId(flight)
                        .build();
                ticketsToAdd.add(ticket);
            }
        } catch(Exception e) {
            throw new ObjectNotFoundException("No users found");
        }

        return ticketRepository.saveAll(ticketsToAdd);
    }

    public List<Ticket> saveCustomTickets(List<TicketBodyRequest> data) {
        List<Ticket> ticketsToAdd = new ArrayList<>(); //= ticketRepository.saveAll(data);

        for(TicketBodyRequest ticket : data) {
            User user = userService.getUserById(ticket.getUserId());
            Flight flight = flightService.getFlightById(ticket.getFlightId());

            Ticket ticketToAdd = Ticket.builder()
                    .price(ticket.getPrice())
                    .seatNumber(ticket.getSeatNumber())
                    .classs(ticket.getClasss())
                    .userId(user)
                    .flightId(flight)
                    .build();

            ticketsToAdd.add(ticketToAdd);
        }

        if(ticketsToAdd.isEmpty()) throw new ObjectNotFoundException("Not enough resources to create ticket");
        return ticketRepository.saveAll(ticketsToAdd);
    }
}
