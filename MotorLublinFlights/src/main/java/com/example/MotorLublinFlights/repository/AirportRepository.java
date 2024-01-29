package com.example.MotorLublinFlights.repository;

import com.example.MotorLublinFlights.entity.Airport;
import com.example.MotorLublinFlights.request.AirportModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
     @Query(value = "SELECT COUNT(*) FROM airport", nativeQuery = true)
     int getAirportSize();

    // @Query(value = "SELECT name FROM airport WHERE name LIKE '?1%'", nativeQuery = true)
   //  List<AirportModel> findByPart(String part);
    List<Airport> findByNameStartsWithIgnoreCase(String name);

    Airport findByName(String name);
}
