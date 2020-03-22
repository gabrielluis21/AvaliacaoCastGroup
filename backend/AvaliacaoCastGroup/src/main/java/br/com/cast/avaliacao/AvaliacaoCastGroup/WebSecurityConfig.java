package br.com.cast.avaliacao.AvaliacaoCastGroup;

import br.com.cast.avaliacao.security.JwtBasicAuthenticationFilter;
import br.com.cast.avaliacao.security.JwtUsernamePasswordAuthenticationFilter;
import br.com.cast.avaliacao.security.UserDetailsServiceImpl;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

import static br.com.cast.avaliacao.security.SecurityConstants.SECRET;
import static br.com.cast.avaliacao.security.SecurityConstants.SIGN_UP_URL;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().antMatchers(SIGN_UP_URL).permitAll()
                .antMatchers(HttpMethod.POST, "/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(jwtBasicAuthenticationFilter())
                .addFilter(jwtBasicAuthenticationFilter())
                // this disables session creation on Spring Security
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().logout().permitAll();
    }

    @Bean
    public JwtUsernamePasswordAuthenticationFilter jwtUsernamePasswordAuthenticationFilter() throws Exception {
        JwtUsernamePasswordAuthenticationFilter jwtUsernamePasswordAuthenticationFilter = new JwtUsernamePasswordAuthenticationFilter(authenticationManager());
        jwtUsernamePasswordAuthenticationFilter.setAuthenticationManager(authenticationManager());
        return jwtUsernamePasswordAuthenticationFilter;
    }

    @Bean
    public JwtBasicAuthenticationFilter jwtBasicAuthenticationFilter() throws Exception {
        return new JwtBasicAuthenticationFilter(authenticationManager());
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                return DigestUtils.sha1Hex(rawPassword + SECRET);
            }
            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return DigestUtils.sha1Hex(rawPassword + SECRET).equals(encodedPassword);
            }
        };
    }
}
