package com.example.MotorLublinFlights.repository;

import com.example.MotorLublinFlights.entity.Plane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaneRepository extends JpaRepository<Plane, Long> {
    @Query(value = "SELECT COUNT(*) FROM plane", nativeQuery = true)
    int getPlaneSize();
}
