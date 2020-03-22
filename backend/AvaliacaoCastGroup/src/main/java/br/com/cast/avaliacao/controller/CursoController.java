package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Curso;
import br.com.cast.avaliacao.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class CursoController {

    @Autowired
    private CursoService service;

    @GetMapping("/courses")
    public List<Curso> getCourses(){
        return service.getAll();
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Curso> getCoursesByID(@PathVariable(value = "id") Long id)
            throws Exception {
        return ResponseEntity.ok().body(service.getById(id));
    }

    @GetMapping("/course/curso.end={date}")
    public ResponseEntity<Curso> getCoursesByDataFim(@PathVariable(value = "date") Date dataFim)
            throws Exception {
        return ResponseEntity.ok().body(service.getByDataFim(dataFim));
    }

    @GetMapping("/course/curso.begin={date}")
    public ResponseEntity<Curso> getCoursesByDataInicio(@PathVariable(value = "date") Date dataInico)
            throws Exception {
        return ResponseEntity.ok().body(service.getByDataFim(dataInico));
    }

    @GetMapping("/course/curso.description=?")
    public ResponseEntity<Curso> getCoursesByAssunto(@RequestBody String assunto)
            throws Exception {
        return ResponseEntity.ok().body(service.getByAssunto(assunto));
    }

    @PostMapping("/courses")
    public Curso createCurso(@Valid @RequestBody Curso newCurso) {
        return service.add(newCurso);
    }

    @PutMapping("/course/{id}")
    public Curso updateCurso(@PathVariable(value="id") Long id,
                                     @Valid @RequestBody Curso curso)
            throws Exception {
        return service.update(id, curso);
    }

    @DeleteMapping("/course/{id}")
    public Map<String, Boolean> deleteCurso(@PathVariable(value = "id") Long id) throws Exception {
        Map<String, Boolean> response = new HashMap<>();
        if(service.delete(id))
            response.put("deleted", true);
        else
            response.put("not deleted", false);

        return response;
    }

}
