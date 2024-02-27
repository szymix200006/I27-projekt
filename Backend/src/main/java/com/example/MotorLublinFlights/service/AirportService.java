package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Airport;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.AirportRepository;
import com.example.MotorLublinFlights.request.AirportModel;
import com.example.MotorLublinFlights.request.AirportRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AirportService {

    private final AirportRepository airportRepository;

    private final FlightConstants flightConstants = new FlightConstants();



    public List<Airport> saveAirport(List<Airport> airports) {
        return airportRepository.saveAll(airports);
    }

    public Airport getRandomAirport(){
        List<Airport> airports = airportRepository.findAll();

        if(airports.isEmpty()) throw new ObjectNotFoundException("No airports found to choose");

        return airports.get((int) flightConstants.getRandomInt(airports.size()));
    }

    public List<Airport> saveRandomAirport() {
        List<Airport> airports = new ArrayList<>();
        for(String airport : flightConstants.getAirports()) {
            Airport airportBuild = Airport.builder()
                                            .name(airport)
                                            .build();
            airports.add(airportBuild);
        }

        return airportRepository.saveAll(airports);
    }

    public Airport getAirportByName(String name) {
        Airport airport = airportRepository.findByName(name);

        if(airport == null) throw new ObjectNotFoundException("Airport not found");

        return airport;
    }

    public List<Airport> getAirportsBySpecificData(AirportRequest airportRequest) {
        return airportRepository.findByNameStartsWithIgnoreCase(airportRequest.getName());
    }
}
