package com.example.MotorLublinFlights.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SaveRequest {
    @Valid
    @NotNull(message = "Amount cannot be null")
    @Min(value = 1, message = "Amount must be minimum 1")
    @Max(value = 100, message = "Amount must be maximum 100")
    private int amount;
}
