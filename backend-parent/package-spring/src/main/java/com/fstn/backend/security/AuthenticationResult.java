package com.fstn.backend.security;

/**
 * The type Authentication result.
 * This object is send back to the front when login is successful
 */
public class AuthenticationResult {
    private String token;

    /**
     * Instantiates a new Authentication result.
     *
     * @param token the token
     */
    public AuthenticationResult(String token) {
        this.token = token;
    }

    /**
     * Gets token.
     *
     * @return the token
     */
    public String getToken() {
        return token;
    }

    /**
     * Sets token.
     *
     * @param token the token
     */
    public void setToken(String token) {
        this.token = token;
    }
}
