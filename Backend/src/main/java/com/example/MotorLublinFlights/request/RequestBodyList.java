package com.example.MotorLublinFlights.request;

import jakarta.validation.Valid;
import lombok.Data;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;


public class RequestBodyList<T>{
    @Valid

    private List<T> data;

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> requestBody) {
        this.data = requestBody;
    }

    public RequestBodyList(List<T> requestBody) {
        this.data = requestBody;
    }

    public RequestBodyList() {
    }

}
