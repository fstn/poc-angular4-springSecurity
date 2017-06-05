package com.fstn.api.exception;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.ws.rs.core.Response;

/**
 * UnhandledExceptionMapperTest
 * Created by stephen on 05/06/2017.
 */
public class UnhandledExceptionMapperTest {

    private UnhandledExceptionMapper unhandledExceptionMapper;

    /**
     * Sets up.
     *
     * @throws Exception the exception
     */
    @Before
    public void setUp() throws Exception {
        unhandledExceptionMapper = new UnhandledExceptionMapper();

    }

    /**
     * To response ok.
     *
     * @throws Exception the exception
     */
    @Test
    public void toResponse_ok() throws Exception {
        Response result = unhandledExceptionMapper.toResponse(new IncompleteDoctorException());
        Assert.assertEquals(304, result.getStatus());
    }

    /**
     * To response null.
     *
     * @throws Exception the exception
     */
    @Test
    public void toResponse_null() throws Exception {
        Response result = unhandledExceptionMapper.toResponse(null);
        Assert.assertEquals(304, result.getStatus());
    }

}