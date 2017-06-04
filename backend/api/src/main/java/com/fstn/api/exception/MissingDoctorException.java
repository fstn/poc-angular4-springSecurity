package com.fstn.api.exception;

/**
 * Thrown when doctor resource is missing
 * Created by stephen on 04/06/2017.
 */
public class MissingDoctorException extends ApiNotModifiedException {
    public MissingDoctorException() {
        super("Doctor object is missing");
    }
}
