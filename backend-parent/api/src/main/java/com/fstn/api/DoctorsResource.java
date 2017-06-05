package com.fstn.api;

import com.fstn.api.sanity.DoctorSanity;
import com.fstn.constant.Role;
import com.fstn.model.Doctor;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Endpoint api class
 * Created by stephen on 01/06/2017.
 */
@Named
@Path(DoctorsResource.PATH)
public class DoctorsResource {

    /**
     * The constant PATH.
     */
    protected static final String PATH = "/doctors";
    private final DoctorSanity doctorSanity;
    private final DoctorsMock doctorsMock;

    /**
     * Instantiates a new Doctors resource.
     *
     * @param doctorSanity the doctor sanity
     */
    @Inject
    public DoctorsResource(DoctorSanity doctorSanity, DoctorsMock doctorsMock) {

        this.doctorSanity = doctorSanity;
        this.doctorsMock = doctorsMock;
    }



    /**
     * Gets all doctors.
     *
     * @return the all doctors
     */
    @GET
    @RolesAllowed({Role.ROLE_USER})
    @Produces(MediaType.APPLICATION_JSON)
    public List<Doctor> getAllDoctors() {
        return doctorsMock.getListOfDoctors();
    }


    /**
     * Add doctor.
     *
     * @param doctor the doctor
     */
    @POST
    @RolesAllowed(Role.ROLE_ADMIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public void addDoctor(final Doctor doctor) {
        doctorSanity.checkNew(doctor, doctorsMock.getListOfDoctors());
        doctorsMock.getListOfDoctors().add(doctor);
    }
}
