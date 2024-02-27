package com.example.MotorLublinFlights.constants;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class FlightConstants {
    private String[] airports = {"Warsaw", "Berlin", "Prague", "Madrid", "Rome", "Vienna", "Athens", "New York", "Los Angeles", "Bali"};

    private String[] names = {"John", "Pablo", "Lionel", "Michail", "Adolf"};
    private String[] lastnames = {"Smith", "Kowalski", "Surname"};
    private String[] mails = {"wp.pl", "gmail.com", "onet.pl"};

    public String[] getAirports() {
        return airports;
    }

    private String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    private Random random = new Random();

    public String getRandomTerminal() {
        return Character.toString(alphabet.charAt(random.nextInt(20)));
    }

    public long getRandomInt(int bound) {
        return random.nextInt(bound);
    }

    public int getRandomGate() {
        return random.nextInt(100);
    }

    public FlightConstants() {}

    public String getRandomLastName() {
        return lastnames[random.nextInt(lastnames.length)];
    }

    public String getRandomMail() {
        return mails[random.nextInt(mails.length)];
    }

    public String getRandomName() {
        return names[random.nextInt(names.length)];
    }
}

