package com.fstn.backend.security;

import javax.annotation.Priority;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.lang.reflect.AnnotatedElement;
import java.lang.reflect.Method;
import java.security.Principal;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Filter that verify Permit all and RolesAllowed annotation
 * Created by stephen on 04/06/2017.
 */
@Provider
@Priority(Priorities.AUTHENTICATION)
public class AuthenticationFilter implements ContainerRequestFilter {


    @Context
    private ResourceInfo resourceInfo;


    @Context
    private HttpServletRequest httpRequest;

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        Class<?> resourceClass = resourceInfo.getResourceClass();

        Set<String> classRoles = extractRoles(resourceClass);

        Method resourceMethod = resourceInfo.getResourceMethod();
        Set<String> methodRoles = extractRoles(resourceMethod);


        if (!resourceClass.isAnnotationPresent(PermitAll.class) &&
                methodRoles.size() == 0 &&
                classRoles.size() == 0) {
            return;
        }

        //has secured annotation, check if request has been authenticated
        try {

            if (httpRequest.getUserPrincipal().getName() == null) {
                requestContext.abortWith(
                        Response.status(Response
                                .Status.UNAUTHORIZED).build());
            }


            requestContext.setSecurityContext(new SecurityContext() {
                @Override
                public Principal getUserPrincipal() {
                    return httpRequest.getUserPrincipal();
                }

                @Override
                public boolean isUserInRole(String role) {
                    return httpRequest.isUserInRole(role);
                }

                @Override
                public boolean isSecure() {
                    return true;
                }

                @Override
                public String getAuthenticationScheme() {
                    return null;
                }
            });
            if (resourceClass.isAnnotationPresent(PermitAll.class) &&
                    methodRoles.size() == 0) {
                return;
            }
            if (methodRoles.size() > 0) {
                for (String role : methodRoles) {
                    if (requestContext.getSecurityContext().isUserInRole(role)) {
                        return;
                    }
                }

            }
            if ((classRoles.size() == 0)) {
                for (String role : classRoles) {
                    if (requestContext.getSecurityContext().isUserInRole(role)) {
                        return;
                    }
                }
            }

            requestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED).build());
        } catch (Exception e) {
            requestContext.abortWith(
                    Response.status(Response.Status.FORBIDDEN).build());
        }
    }

    /**
     *  Extract the roles from the annotated element
      */
    private Set<String> extractRoles(AnnotatedElement annotatedElement) {

        if (annotatedElement == null) {
            return new HashSet<>();

        } else {
            RolesAllowed rolesAllowed = annotatedElement
                    .getAnnotation(RolesAllowed.class);
            Set<String> roles = new HashSet<>();
            if (rolesAllowed == null) {
                return roles;
            } else {
                String[] allowedRoles = rolesAllowed.value();
                return new HashSet<>(Arrays.asList(allowedRoles));
            }
        }
    }


}

