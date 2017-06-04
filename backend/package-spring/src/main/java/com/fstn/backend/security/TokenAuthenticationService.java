package com.fstn.backend.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;

class TokenAuthenticationService {
    static final long EXPIRATIONTIME = 864_000_000; // 10 days
    static final String SECRET = "ThisIsASecret";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    static final ObjectMapper mapper = new ObjectMapper();

    static{
//        mapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_CONCRETE_AND_ARRAYS);
    }

    static void addAuthentication(HttpServletResponse res, Authentication authentication) throws IOException {
        HashMap<String, Object> claims = new HashMap();
        List<String> roles = authentication.getAuthorities()
                .stream()
                .map(authority -> authority.getAuthority())
                .collect(Collectors.toList());

        claims.put("roles",  mapper.writeValueAsString(roles));
        String JWT = Jwts.builder()
                .setClaims(claims)
                .setSubject(authentication.getName())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        AuthenticationResult authenticationResult = new AuthenticationResult(JWT);

        res.getWriter().write(mapper.writeValueAsString(authenticationResult));
    }

    static Authentication getAuthentication(HttpServletRequest request) throws IOException {
        String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            // get user name
            String user = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody()
                    .getSubject();

            // get user role
//            String roles = Jwts.parser()
//                    .setSigningKey(SECRET)
//                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
//                    .getBody().get("roles").toString();

            List<String> grantedAuths = mapper.readValue( Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody().get("roles").toString(),
                    TypeFactory.defaultInstance().constructParametricType(List.class, String.class));
//            List<GrantedAuthority> grantedAuths = new ArrayList<GrantedAuthority>();
//            grantedAuths.add(new SimpleGrantedAuthority(roles));

            List<SimpleGrantedAuthority> authorities = grantedAuths.stream().map(auth ->{
                return new SimpleGrantedAuthority(auth);
            }).collect(Collectors.toList());

            return user != null ?
                    new UsernamePasswordAuthenticationToken(emptyList(), user, authorities) :
                    null;
        }
        return null;
    }
}