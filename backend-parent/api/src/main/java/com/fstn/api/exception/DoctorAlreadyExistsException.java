package com.fstn.api.exception;

/**
 * Thrown when doctor already exists
 * Created by stephen on 04/06/2017.
 */
public class DoctorAlreadyExistsException extends ApiNotModifiedException {

    private static final String DOCTOR_OBJECT_ALREADY_EXISTS = "Doctor object already exists";

    public DoctorAlreadyExistsException() {
        super(DOCTOR_OBJECT_ALREADY_EXISTS);
    }
}
