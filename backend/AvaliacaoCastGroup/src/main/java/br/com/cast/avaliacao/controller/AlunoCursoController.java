package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.AlunoCurso;
import br.com.cast.avaliacao.service.AlunoCursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AlunoCursoController {

    @Autowired
    private AlunoCursoService service;

    @GetMapping("/student-courses")
    public List<AlunoCurso> getAll(){
        return service.getAll();
    }

    @GetMapping("/student-course/{id}")
    public AlunoCurso getById(@PathVariable(value = "id") Long id) throws Exception {
        return service.getById(id);
    }

    @PostMapping("/students-courses")
    public AlunoCurso add(@Valid @RequestBody AlunoCurso newAlunoCurso) throws Exception {
        return service.add(newAlunoCurso);
    }

    @PutMapping("/student-course/{id}")
    public AlunoCurso update(@PathVariable(value = "id") Long id, @RequestBody AlunoCurso alunoCurso) throws Exception {
        return service.update(id, alunoCurso);
    }

    @DeleteMapping("/student-course/{id}")
    public boolean delete(@PathVariable(value = "id") Long id) throws Exception {
        return service.delete(id);
    }
}
