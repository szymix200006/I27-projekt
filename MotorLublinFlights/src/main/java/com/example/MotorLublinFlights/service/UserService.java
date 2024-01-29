package com.example.MotorLublinFlights.service;

import com.example.MotorLublinFlights.constants.FlightConstants;
import com.example.MotorLublinFlights.entity.Airport;
import com.example.MotorLublinFlights.entity.Flight;
import com.example.MotorLublinFlights.entity.Ticket;
import com.example.MotorLublinFlights.entity.User;
import com.example.MotorLublinFlights.enums.Classs;
import com.example.MotorLublinFlights.enums.Role;
import com.example.MotorLublinFlights.exceptions.ObjectNotFoundException;
import com.example.MotorLublinFlights.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FlightConstants flightConstants = new FlightConstants();

    public List<User> saveUsers(List<User> users) {
        return userRepository.saveAll(users);
    }

    public User getRandomUser() {
        List<User> users = userRepository.findAll();

        if(users.isEmpty()) throw new ObjectNotFoundException("No users to choose from.");

        return users.get((int) flightConstants.getRandomInt(users.size()));
    }

    public List<User> saveRandomUsers(int amount) {
        List<User> usersToAdd = new ArrayList<>();

            for(int i = 0; i < amount; i++) {
                String name = flightConstants.getRandomName();
                String lastName = flightConstants.getRandomLastName();
                User user = User.builder()
                        .email((name + lastName).toLowerCase() + "@" + flightConstants.getRandomMail())
                        .name(name)
                        .lastName(lastName)
                        .role(Role.values()[(int) flightConstants.getRandomInt(Role.values().length)])
                        .build();
                usersToAdd.add(user);
            }


        return userRepository.saveAll(usersToAdd);
    }
}
