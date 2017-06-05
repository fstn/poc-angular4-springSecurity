package com.fstn.api.sanity;

import com.fstn.api.exception.DoctorAlreadyExistsException;
import com.fstn.api.exception.IncompleteDoctorException;
import com.fstn.api.exception.MissingDoctorException;
import com.fstn.model.Doctor;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by stephen on 04/06/2017.
 */
public class DoctorSanityTest {

    private DoctorSanity doctorSanity;

    /**
     * Sets up.
     *
     * @throws Exception the exception
     */
    @Before
    public void setUp() throws Exception {
        doctorSanity = new DoctorSanity();
    }

    /**
     * Check new ok.
     *
     * @throws Exception the exception
     */
    @Test
    public void checkNew_ok() throws Exception {
        doctorSanity.checkNew(new Doctor().setName("test").setNumber("0456988596"), null);
    }

    /**
     * Check new null.
     *
     * @throws Exception the exception
     */
    @Test(expected = MissingDoctorException.class)
    public void checkNew_null() throws Exception {
        doctorSanity.checkNew(null, null);

    }

    /**
     * Check new no name.
     *
     * @throws Exception the exception
     */
    @Test(expected = IncompleteDoctorException.class)
    public void checkNew_noName() throws Exception {
        doctorSanity.checkNew(new Doctor().setNumber("0456988596"), null);
    }

    /**
     * Check new no number.
     *
     * @throws Exception the exception
     */
    @Test(expected = IncompleteDoctorException.class)
    public void checkNew_noNumber() throws Exception {
        doctorSanity.checkNew(new Doctor().setNumber("0456988596"), null);

    }

    /**
     * Check new exists.
     *
     * @throws Exception the exception
     */
    @Test(expected = DoctorAlreadyExistsException.class)
    public void checkNew_exists() throws Exception {
        Doctor doctor = new Doctor().setName("test").setNumber("0456988596");
        List<Doctor> listOfDoctors = new ArrayList<>();
        listOfDoctors.add(doctor);
        doctorSanity.checkNew(doctor, listOfDoctors);

    }

}