package com.example.MotorLublinFlights.controler;

import com.example.MotorLublinFlights.entity.Airport;
import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.entity.Ticket;
import com.example.MotorLublinFlights.exceptions.BadRequestError;
import com.example.MotorLublinFlights.request.*;
import com.example.MotorLublinFlights.service.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserControler {
    private final FlightService flightService;

    private final PlaneService planeService;

    private final TicketService ticketService;

    private final AirportService airportService;

    private final UserService userService;

    @PostMapping("/flights")
    public ResponseEntity<?> fetchFlights(@RequestBody FlightRequest flightRequest) {
        List<FlightModel> flightModelList = flightService.getFlightsBySpecificData(flightRequest);
        return  ResponseEntity.ok().body(flightModelList);
    }

    @PostMapping("/airports")
    public ResponseEntity<?> fetchAirports(@RequestBody AirportRequest airportRequest) {
        List<Airport> airportList = airportService.getAirportsBySpecificData(airportRequest);
        return ResponseEntity.ok().body(airportList);
    }

    @PostMapping("/addTickets")
    public ResponseEntity<?> saveTicket(@Valid @RequestBody RequestBodyList<TicketBodyRequest> ticketRequestBodyList) {
        List<Ticket> ticketsToAdd = ticketService.saveCustomTickets(ticketRequestBodyList.getData());
        return ResponseEntity.ok().body(ticketsToAdd);
    }

    @PostMapping("/getTickets")
    public ResponseEntity<?> getTickets(@Valid @RequestBody TicketRequest ticketRequest) {
        List<TicketsModel> tickets = flightService.getTicketsForFlight(ticketRequest.getFlightId());
        return ResponseEntity.ok().body(tickets);
    }
    /*@GetMapping("/tickets")
    public ResponseEntity<?> getTickets(@RequestBody TicketRequest ticketRequest) {
        List<Ticket>
    }*/

}
