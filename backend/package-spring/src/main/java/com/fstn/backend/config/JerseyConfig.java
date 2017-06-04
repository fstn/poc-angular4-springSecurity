package com.fstn.backend.config;

import com.fstn.api.DoctorsResource;
import com.fstn.api.exception.UnhandledExceptionMapper;
import com.fstn.backend.security.AuthenticationFilter;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

/**
 * Jersey configuration class
 * Created by stephen on 01/06/2017.
 */
@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(DoctorsResource.class);
        register(UnhandledExceptionMapper.class);
        register(AuthenticationFilter.class);
    }

}
