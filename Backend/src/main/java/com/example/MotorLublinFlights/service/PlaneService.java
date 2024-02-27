package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Plane;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.PlaneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaneService {
    private final PlaneRepository planeRepository;

    private final FlightConstants flightConstants = new FlightConstants();

    public List<Plane> savePlane(List<Plane> planes) {
        return planeRepository.saveAll(planes);
    }

    public Plane getRandomPlane(){
        List<Plane> planes = planeRepository.findAll();

        if(planes.isEmpty()) throw new ObjectNotFoundException("No planes to choose from.");

        return planes.get((int) flightConstants.getRandomInt(planes.size()));
    }

    public Plane getPlane(long id) {
        return planeRepository.findById(id).orElseThrow(() -> new ObjectNotFoundException("Plane not found"));
    }
}
