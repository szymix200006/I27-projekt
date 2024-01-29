package com.example.MotorLublinFlights.repository;

import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.request.FlightModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {
    @Query(value = "SELECT COUNT(*) FROM flight", nativeQuery = true)
    int getFlightSize();
    @Query(value = "SELECT f.id as id, f.arrive_time as arriveTime, f.departure_time as departureTime, ls.name as arrive, le.name as departure " +
            "FROM flight f " +
            "JOIN airport ls ON f.arrive = ls.id " +
            "JOIN airport le ON f.departure = le.id " +
            "WHERE (ls.name = :arrive OR :arrive IS NULL) " +
            "AND (le.name = :departure OR :departure IS NULL) " +
            "AND (f.arrive_time = :arriveTime OR :arriveTime IS NULL) " +
            "AND (f.departure_time = :departureTime OR :departureTime IS NULL)",
            nativeQuery = true)
    List<FlightModel> findByOptionalArriveAndOptionalDepartureAndOptionalArriveTimeAndOptionalDepartureTimeIgnoreCase(
            @Param("arrive") String arrive,
            @Param("departure") String departure,
            @Param("arriveTime") String arriveTime,
            @Param("departureTime") String departureTime);
}
