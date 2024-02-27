package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.enums.Classs;
import com.example.MotorLublinFlights.exceptions.BadRequestError;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.FlightRepository;
import com.example.MotorLublinFlights.request.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class FlightService {

    private final FlightRepository flightRepository;
    private final AirportService airportService;
    private final PlaneService planeService;
    private final FlightConstants flightConstants = new FlightConstants();

    public List<Flight> saveFlights(int amount) {
        List<Flight> flightsToAdd = new ArrayList<>();


            for (int i = 0; i < amount; i++) {
                Flight flight = Flight.builder()
                        .arrive(airportService.getRandomAirport())
                        .departure(airportService.getRandomAirport())
                        .arriveTime(String.valueOf(LocalDate.now().plusDays(ThreadLocalRandom.current().nextInt(365) + 1)))
                        .departureTime(String.valueOf(LocalDate.now().plusDays(ThreadLocalRandom.current().nextInt(365) + 1)))
                        .gate(flightConstants.getRandomGate())
                        .terminal(flightConstants.getRandomTerminal())
                        .planeId(planeService.getRandomPlane())
                        .build();

                flightsToAdd.add(flight);
            }

        return flightRepository.saveAll(flightsToAdd);
    }

    public Flight getRandomFlight() {
        List<Flight> flights = flightRepository.findAll();

        if(flights.isEmpty()) throw new ObjectNotFoundException("No flights to choose from.");

        return flights.get((int) flightConstants.getRandomInt(flights.size()));
    }

   public List<FlightModel> getFlightsBySpecificData(FlightRequest flightRequest) {
        List<FlightModel> flightModelList
                = flightRepository.findByOptionalArriveAndOptionalDepartureAndOptionalArriveTimeAndOptionalDepartureTimeIgnoreCase(
                flightRequest.getStart(),
                flightRequest.getDestination(),
                flightRequest.getArriveTime(),
                flightRequest.getDepartureTime()
        );

        //if(flightModelList.isEmpty()) throw new ObjectNotFoundException("No flights found");

        return flightModelList;
    }

    public Flight getFlightById(long id) {
        return flightRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Flight not found"));
    }

    public TicketResponse getTicketsForFlight(long flightId) {
        Flight flight = flightRepository.findById(flightId).orElseThrow(() -> new BadRequestError("Flight doesn`t exist"));
        List<TicketsModel> seats = flightRepository.findTicketsForFlight(flightId);
        System.out.println(flightId);
        System.out.println(seats.size());
        int seatCount = flightRepository.findFlightSeatCount(flightId);
        SeatBody[] ticketsResponse = new SeatBody[seatCount];

        for(int i = 0; i < seatCount; i++) {
            Classs ticketClass = i < 42 ? Classs.FIRST : i < 84 ? Classs.BUSINESS : Classs.ECONOMY;
            int price = ticketClass == Classs.ECONOMY ? 100 : ticketClass == Classs.BUSINESS ? 500 : 1000;
            ticketsResponse[i] = new SeatBody(false, i, ticketClass, price, flight);
        }

        for(TicketsModel seat : seats) {
            int currentSeatNumber = seat.getSeatNumber();
            ticketsResponse[currentSeatNumber].setTaken(true);
        }

        long planeId = flightRepository.getPlaneForFlight(flightId);

        return new TicketResponse(planeId ,ticketsResponse);
    }
}
