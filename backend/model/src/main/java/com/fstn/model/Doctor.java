package com.fstn.model;

/**
 * Model that represent a doctor
 * Created by stephen on 04/06/2017.
 */
public class Doctor {
    private String name;
    private String number;

    /**
     * Instantiates a new Doctor.
     *
     * @param name   the name
     * @param number the number
     */
    public Doctor(String name, String number) {
        this.name = name;
        this.number = number;
    }

    /**
     * Instantiates a new Doctor.
     */
    public Doctor() {
    }

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     * @return the name
     */
    public Doctor setName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Gets number.
     *
     * @return the number
     */
    public String getNumber() {
        return number;
    }

    /**
     * Sets number.
     *
     * @param number the number
     */
    public Doctor setNumber(String number) {
        this.number = number;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Doctor doctor = (Doctor) o;

        if (name != null ? !name.equals(doctor.name) : doctor.name != null) return false;
        return number != null ? number.equals(doctor.number) : doctor.number == null;
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (number != null ? number.hashCode() : 0);
        return result;
    }
}
