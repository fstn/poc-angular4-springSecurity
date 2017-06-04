package com.fstn.api.sanity;

import com.fstn.api.exception.DoctorAlreadyExistsException;
import com.fstn.api.exception.IncompleteDoctorException;
import com.fstn.api.exception.MissingDoctorException;
import com.fstn.model.Doctor;

import javax.inject.Named;
import java.util.List;
import java.util.Objects;

/**
 * Sanity checker for doctor
 * Created by stephen on 04/06/2017.
 */
@Named
public class DoctorSanity {
    /**
     * Check new.
     *
     * @param doctor        the doctor
     * @param listOfDoctors the list of doctors
     */
    public void checkNew(final Doctor doctor, final List<Doctor> listOfDoctors){
        if (Objects.isNull(doctor)) {
            throw new MissingDoctorException();
        }
        if (Objects.isNull(doctor.getName())
                || doctor.getName().isEmpty()
                || Objects.isNull(doctor.getNumber())
                || doctor.getName().isEmpty()) {
            throw new IncompleteDoctorException();
        }
        if (Objects.nonNull(listOfDoctors) && listOfDoctors.contains(doctor)) {
            throw new DoctorAlreadyExistsException();
        }
    }
}
