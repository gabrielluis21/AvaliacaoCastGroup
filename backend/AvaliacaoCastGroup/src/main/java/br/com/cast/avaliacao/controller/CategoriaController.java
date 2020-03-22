package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Categoria;

import br.com.cast.avaliacao.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @GetMapping("/categories")
    public List<Categoria> getCategoriaByID(){
        return service.getAll();

    }

    @GetMapping("/category/{id}")
    public ResponseEntity<Categoria> getCategoriaByID(@PathVariable(value = "id") Long id)
            throws Exception {
        return ResponseEntity.ok().body(service.getById(id));
    }

    @PostMapping("/categories")
    public Categoria createCategoria(@Valid @RequestBody String descricao) {
        return service.add(descricao);
    }

    @PutMapping("/category/{id}")
    public Categoria updateCategoria(@PathVariable(value="id") Long id,
                                                     @Valid @RequestBody String descricao)
            throws Exception {
        return service.update(id, descricao);
    }

    @DeleteMapping("/category/{id}")
    public Map<String, Boolean> deleteCategoria(@PathVariable(value = "id") Long id) throws Exception {
        Map<String, Boolean> response = new HashMap<>();
        if(service.delete(id))
            response.put("deleted", true);
        else
            response.put("not deleted", false);

        return response;
    }
}
