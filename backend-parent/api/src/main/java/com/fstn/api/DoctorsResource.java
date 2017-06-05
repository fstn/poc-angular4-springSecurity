package com.fstn.api;

import com.fstn.api.sanity.DoctorSanity;
import com.fstn.constant.Role;
import com.fstn.model.Doctor;

import javax.annotation.PostConstruct;
import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Collections;
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
    private List<Doctor> listOfDoctors;

    /**
     * Instantiates a new Doctors resource.
     *
     * @param doctorSanity the doctor sanity
     */
    @Inject
    public DoctorsResource(DoctorSanity doctorSanity) {
        this.doctorSanity = doctorSanity;
    }

    @PostConstruct
    private void initMock() {
        listOfDoctors = Collections.synchronizedList(new ArrayList<>());
        for (int i = 0; i < 10; i++) {
            String doctorIncrement = String.format("%02d", i);
            listOfDoctors.add(new Doctor("doctor" + doctorIncrement, "04585960" + doctorIncrement));
        }
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
        return listOfDoctors;
    }


    /**
     * Add doctor.
     *
     * @param doctor the doctor
     */
    @POST
    @RolesAllowed(Role.ROLE_ADMIN)
    @Produces(MediaType.APPLICATION_JSON)
    public void addDoctor(final Doctor doctor) {
        doctorSanity.checkNew(doctor, listOfDoctors);
        listOfDoctors.add(doctor);
    }
}
