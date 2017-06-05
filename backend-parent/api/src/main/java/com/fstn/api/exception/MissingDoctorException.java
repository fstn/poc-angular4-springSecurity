package com.fstn.api.exception;

/**
 * Thrown when doctor resource is missing
 * Created by stephen on 04/06/2017.
 */
public class MissingDoctorException extends ApiNotModifiedException {

    private static final String DOCTOR_OBJECT_IS_MISSING = "Doctor object is missing";

    public MissingDoctorException() {
        super(DOCTOR_OBJECT_IS_MISSING);
    }
}
