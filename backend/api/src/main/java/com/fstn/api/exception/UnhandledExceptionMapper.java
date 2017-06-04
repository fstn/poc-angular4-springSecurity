package com.fstn.api.exception;

import org.apache.log4j.Logger;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;


@Provider
public class UnhandledExceptionMapper implements ExceptionMapper<ApiNotModifiedException> {

    private Logger logger = Logger.getLogger(UnhandledExceptionMapper.class);

    @Override
    public Response toResponse(ApiNotModifiedException exception) {
        logger.error(exception);
        return Response.notModified().build();
    }
}