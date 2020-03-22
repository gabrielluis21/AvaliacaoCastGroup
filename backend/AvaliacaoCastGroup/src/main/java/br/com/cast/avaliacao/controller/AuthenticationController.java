package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Usuario;
import br.com.cast.avaliacao.security.AutenticacaoService;
import br.com.cast.avaliacao.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/authemtication")
public class AuthenticationController {
    @Autowired
    private AutenticacaoService autenticacao;

    @Autowired
    private UsuarioService userService;

    @PostMapping("/register")
    public ResponseEntity<Object> registration(@RequestBody Usuario newUser) throws Exception {
        userService.add(newUser);
        String token = autenticacao.generateJwt(newUser.getUserName());
        Map<String, Object> result = new HashMap<>();
        result.put("token", token);
        result.put("user", newUser);

        return ResponseEntity.ok().body(result);
    }

    @GetMapping(value = "/login")
    public ResponseEntity<Object> login(@RequestBody String email, @RequestBody String senha) throws Exception {
        String token;
        Map<String, Object> result = new HashMap<String, Object>();
        Usuario currentUser = userService.getByEmailAndSenha(email, senha);
        if(currentUser != null){
            token =  autenticacao.generateJwt(currentUser.getUserName());
            result.put("token", token);
            result.put("currentUser", currentUser);
            return ResponseEntity.ok().body(result);
        }else
            return  ResponseEntity.badRequest().body("Falha no login");
    }
}
