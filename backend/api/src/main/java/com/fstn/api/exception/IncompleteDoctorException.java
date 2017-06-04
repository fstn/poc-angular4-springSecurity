package com.fstn.api.exception;

/**
 * Thrown when doctor object is incomplete
 * Created by stephen on 04/06/2017.
 */
public class IncompleteDoctorException extends ApiNotModifiedException {
    public IncompleteDoctorException() {
        super("Doctor object is incomplete");
    }
}
