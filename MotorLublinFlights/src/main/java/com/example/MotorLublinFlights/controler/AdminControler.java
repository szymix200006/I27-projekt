package com.example.MotorLublinFlights.controler;


import com.example.MotorLublinFlights.entity.Airport;
import com.example.MotorLublinFlights.entity.Plane;
import com.example.MotorLublinFlights.entity.Ticket;
import com.example.MotorLublinFlights.entity.User;
import com.example.MotorLublinFlights.request.RequestBodyList;
import com.example.MotorLublinFlights.request.SaveRequest;
import com.example.MotorLublinFlights.service.AirportService;
import com.example.MotorLublinFlights.service.PlaneService;
import com.example.MotorLublinFlights.service.TicketService;
import com.example.MotorLublinFlights.service.UserService;
import com.example.MotorLublinFlights.service.FlightService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@CrossOrigin
public class AdminControler {

    private final UserService userService;

    private final PlaneService planeService;

    private final TicketService ticketService;

    private final AirportService airportService;

    private final FlightService flightService;

    @PostMapping("/flight")
    public ResponseEntity<?> saveFlights(@Valid @RequestBody SaveRequest saveRequest){
        /*int amount;
        try {
            amount = saveRequest.getAmount();
            if(amount <= 0) throw new BadRequestError("Amount must be an integer greater than 0.");
        }catch (BadRequestError badRequestError) {
            return ResponseEntity.badRequest().body(badRequestError.getMessage());
        }

        if(flightService.saveFlights(amount) == null) return ResponseEntity.badRequest().body("No flights to add. You need to add airports and flights first.");
        return ResponseEntity.ok().body("Added " + String.valueOf(saveRequest.getAmount()) + " Flights/s");*/
        flightService.saveFlights(saveRequest.getAmount());
        return ResponseEntity.ok().body(saveRequest.getAmount());
    }

    @PostMapping("/plane")
    public ResponseEntity<?> savePlanes(@Valid @RequestBody RequestBodyList<Plane> planes){
        List<Plane> addedPlanes = planeService.savePlane(planes.getData());
        return ResponseEntity.ok().body(addedPlanes.size());
    }

    @PostMapping("/airport")
    public ResponseEntity<?> saveAirports(@Valid @RequestBody RequestBodyList<Airport> airports){
        List<Airport> addedAirports = airportService.saveAirport(airports.getData());
        return ResponseEntity.ok().body(addedAirports.size());
    }

    @PostMapping("/ticket")
    public ResponseEntity<?> saveTickets(@Valid @RequestBody SaveRequest saveRequest){
        /*int amount;
        try {
            amount = saveRequest.getAmount();
            if(amount <= 0) throw new Exception();
        }catch (Exception e) {
            return ResponseEntity.badRequest().body("Wrong amount");
        }

        ticketService.saveTickets(amount);
        return ResponseEntity.ok().body("Added " + String.valueOf(saveRequest.getAmount()) + " Ticket/s");*/

        ticketService.saveTickets(saveRequest.getAmount());
        return ResponseEntity.ok().body(saveRequest.getAmount());
    }

    @PostMapping("/customTicket")
    public ResponseEntity<?> saveTicket(@Valid @RequestBody RequestBodyList<Ticket> ticketModelList) {
        List<Ticket> ticketList = ticketService.saveCustomTickets(ticketModelList.getData());
        return ResponseEntity.ok().body(ticketList.size());
    }

    @PostMapping("/user")
    public ResponseEntity<?> saveUsers(@Valid @RequestBody RequestBodyList<User> users) {
        List<User> savedUsers = userService.saveUsers(users.getData());
        return ResponseEntity.ok().body(savedUsers.size());
    }
    @PostMapping("/randomUser")
    public ResponseEntity<?> saveRandomUsers(@Valid @RequestBody SaveRequest saveRequest){
        /*int amount;
        try {
            amount = saveRequest.getAmount();
            if(amount <= 0) throw new Exception();
        }catch (Exception e) {
            return ResponseEntity.badRequest().body("Wrong amount");
        }

        userService.saveRandomUsers(amount);
        return ResponseEntity.ok().body("Added " + String.valueOf(saveRequest.getAmount()) + " User/s");*/
        userService.saveRandomUsers(saveRequest.getAmount());
        return ResponseEntity.ok().body(saveRequest.getAmount());
    }

    @PostMapping("/randomAirports")
    public ResponseEntity<?> saveRandomAirports(@Valid @RequestBody SaveRequest saveRequest) {
        List<Airport> savedAirports = airportService.saveRandomAirport();
        return ResponseEntity.ok().body(savedAirports.size());
    }
}
