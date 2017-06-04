package com.fstn.api.exception;

/**
 * Thrown when doctor already exists
 * Created by stephen on 04/06/2017.
 */
public class DoctorAlreadyExistsException extends ApiNotModifiedException {
    public DoctorAlreadyExistsException() {
        super("Doctor object already exists");
    }
}
