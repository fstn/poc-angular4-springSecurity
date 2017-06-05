package com.fstn.api;


import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Endpoint api class
 * Created by stephen on 01/06/2017.
 */
@Named
@Path(HealthCheckResource.PATH)
public class HealthCheckResource {

    /**
     * The constant PATH.
     */
    protected static final String PATH = "/health";

    /**
     * Return ok
     *
     * @return the all doctors
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllDoctors() {
        String OK = "ok";
        return OK;
    }

}
