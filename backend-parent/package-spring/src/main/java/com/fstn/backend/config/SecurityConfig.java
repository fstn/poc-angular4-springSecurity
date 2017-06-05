package com.fstn.backend.config;

import com.fstn.backend.security.HttpCORSFilter;
import com.fstn.backend.security.JWTAuthenticationFilter;
import com.fstn.backend.security.JWTLoginFilter;
import com.fstn.constant.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Configure Spring Security to secure access to Api endPoints
 * Created by stephen on 01/06/2017.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**/*").permitAll()//allow CORS option calls to debug purpose REMOVE TO PRODUCTION
                .antMatchers("/login").permitAll()
                .antMatchers("/health").permitAll()
                .anyRequest().authenticated()
                .and()
                // We filter the api/login requests
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class)
                // And filter other requests to check the presence of JWT in header
                .addFilterBefore(new JWTAuthenticationFilter(),
                        UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new HttpCORSFilter(), ChannelProcessingFilter.class);
    }

    /**
     * Add default mock users
     *
     * @param auth
     * @throws Exception
     */
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .withUser("user")
                .password("password")
                .authorities(Role.ROLE_USER);

        auth
                .inMemoryAuthentication()
                .withUser("admin")
                .password("password")
                .authorities(Role.ROLE_ADMIN, Role.ROLE_USER);
    }
}
