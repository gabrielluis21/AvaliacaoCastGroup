package br.com.cast.avaliacao.security;

import br.com.cast.avaliacao.model.Role;
import br.com.cast.avaliacao.model.Usuario;
import br.com.cast.avaliacao.repository.UsuarioRepository;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static br.com.cast.avaliacao.security.SecurityConstants.SECRET;

@Service
public class AutenticacaoService {

    @Autowired
    private UsuarioRepository repository;

    public String generateJwt(String userName){
        Usuario user = repository.findByUserName(userName);
        List<Role> userRoles = new ArrayList<>();
        user.getRoles().forEach(userRoles::add);
        String token = JWT.create()
                .withClaim("usuarioLogado", user.getUserName())
                .withClaim("roles", userRoles)
                .sign(Algorithm.HMAC256(SECRET));
        return token;
    }
}
