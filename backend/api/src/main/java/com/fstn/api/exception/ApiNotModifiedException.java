package com.fstn.api.exception;

/**
 * Api exception Object
 * Created by stephen on 04/06/2017.
 */
public class ApiNotModifiedException extends RuntimeException {
    /**
     * Instantiates a new Api exception.
     *
     * @param s the s
     */
    public ApiNotModifiedException(String s) {
        super(s);
    }
}
