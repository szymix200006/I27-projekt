package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.exceptions.BadRequestError;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.FlightRepository;
import com.example.MotorLublinFlights.request.FlightModel;
import com.example.MotorLublinFlights.request.FlightRequest;
import com.example.MotorLublinFlights.request.TicketsModel;
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

    public boolean[] getTicketsForFlight(long flightId) {
        flightRepository.findById(flightId).orElseThrow(() -> new BadRequestError("Flight doesn`t exist"));
        List<TicketsModel> seats = flightRepository.findTicketsForFlight(flightId);
        int seatCount = flightRepository.findFlightSeatCount(flightId);
        boolean[] ticketsResponse = new boolean[seatCount];

        for(int i = 0; i < seatCount; i++) ticketsResponse[i] = false;
        for(TicketsModel seat : seats) {
            int currentSeatNumber = seat.getSeatNumber();
            ticketsResponse[currentSeatNumber] = true;
        }
        return ticketsResponse;
    }
}
