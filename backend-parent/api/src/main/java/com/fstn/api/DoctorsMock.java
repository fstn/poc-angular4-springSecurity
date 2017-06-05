package com.fstn.api;

import com.fstn.model.Doctor;

import javax.annotation.PostConstruct;
import javax.inject.Named;
import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Mock to store doctors
 * Created by stephen on 05/06/2017.
 */
@Named
@Singleton
public class DoctorsMock {

    private List<Doctor> listOfDoctors;

    @PostConstruct
    private void initMock() {
        listOfDoctors = Collections.synchronizedList(new ArrayList<>());
        for (int i = 0; i < 10; i++) {
            String doctorIncrement = String.format("%02d", i);
            listOfDoctors.add(new Doctor("doctor" + doctorIncrement, "04585960" + doctorIncrement));
        }
    }

    /**
     * Gets list of doctors.
     *
     * @return the list of doctors
     */
    public List<Doctor> getListOfDoctors() {
        return listOfDoctors;
    }

    /**
     * Sets list of doctors.
     *
     * @param listOfDoctors the list of doctors
     * @return the list of doctors
     */
    public DoctorsMock setListOfDoctors(List<Doctor> listOfDoctors) {
        this.listOfDoctors = listOfDoctors;
        return this;
    }
}
