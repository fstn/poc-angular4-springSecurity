package com.fstn.api.exception;

/**
 * Thrown when doctor object is incomplete
 * Created by stephen on 04/06/2017.
 */
public class IncompleteDoctorException extends ApiNotModifiedException {

    private static final String DOCTOR_OBJECT_IS_INCOMPLETE = "Doctor object is incomplete";

    public IncompleteDoctorException() {
        super(DOCTOR_OBJECT_IS_INCOMPLETE);
    }
}
