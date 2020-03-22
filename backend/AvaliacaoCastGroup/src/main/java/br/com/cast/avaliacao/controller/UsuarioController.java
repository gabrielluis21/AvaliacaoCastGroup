package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Usuario;
import br.com.cast.avaliacao.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @GetMapping("/users")
    public List<Usuario> getAll(){
        return service.getAll();
    }

    @GetMapping("/user/{id}")
    public Usuario getById(@PathVariable(value = "id") Long id) throws Exception {
        return service.getById(id);
    }

    @PostMapping("/users")
    public Usuario add(@Valid @RequestBody Usuario usuario) throws Exception {
        return service.add(usuario);
    }

    @PutMapping("/user/{id}")
    public Usuario update(@PathVariable(value = "id") Long id, @RequestBody Usuario usuario) throws Exception {
        return service.update(id, usuario);
    }

    @DeleteMapping("/user/{id}")
    public boolean delete(@PathVariable(value = "id") Long id) throws Exception {
        return service.delete(id);
    }
}
