package com.fstn.api;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Endpoint api class
 * Created by stephen on 01/06/2017.
 */
@Component
@Path(HealthCheckResource.PATH)
public class HealthCheckResource {

    /**
     * The constant PATH.
     */
    protected static final String PATH = "/health";

    private final String OK = "ok";

    /**
     * Return ok
     *
     * @return the all doctors
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllDoctors() {
        return OK;
    }

}
