package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Aluno;
import br.com.cast.avaliacao.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @GetMapping("/students")
    public List<Aluno> getAll(){
        return service.getAll();
    }

    @GetMapping("/student/{id}")
    public Aluno getById(@PathVariable(value = "id") Long id) throws Exception {
        return service.getById(id);
    }

    @PostMapping("/students")
    public Aluno add(@Valid @RequestBody Aluno aluno){
        return service.add(aluno);
    }

    @PutMapping("/student/{id}")
    public Aluno update(@PathVariable(value = "id") Long id, @RequestBody Aluno aluno) throws Exception {
        return service.update(id, aluno);
    }

    @DeleteMapping("/student/{id}")
    public boolean delete(@PathVariable(value = "id") Long id) throws Exception {
        return service.delete(id);
    }
}
