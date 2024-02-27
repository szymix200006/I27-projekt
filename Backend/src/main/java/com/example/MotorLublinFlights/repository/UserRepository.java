package com.example.MotorLublinFlights.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.MotorLublinFlights.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT COUNT(*) FROM user", nativeQuery = true)
    int getUserSize();
}
