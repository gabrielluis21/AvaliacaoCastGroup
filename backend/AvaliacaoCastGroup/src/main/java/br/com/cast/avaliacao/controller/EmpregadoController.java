package br.com.cast.avaliacao.controller;

import br.com.cast.avaliacao.model.Empregado;
import br.com.cast.avaliacao.service.EmpregadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EmpregadoController {

    @Autowired
    private EmpregadoService service;

    @GetMapping("/employees")
    public List<Empregado> getAll(){
        return service.getAll();
    }
    @GetMapping("/employees/{cargo}")
    public List<Empregado> getAllByCargo(@PathVariable(value = "cargo") String cargo){
        return service.getAllByCargo(cargo);
    }

    @GetMapping("/employees/{admissao}")
    public List<Empregado> getAllByAdmissao(@PathVariable(value = "admissao") Date admissao){
        return service.getAllByAdmissao(admissao);
    }

    @GetMapping("/employees/{id}/{admissao}")
    public Empregado getAllByAdmissaoAndId(@PathVariable(value = "id") Long id ,
                                           @PathVariable(value = "admissao") Date admissao){
        return service.getByAdmissaoAndId(admissao, id);
    }

    @PostMapping("/employees")
    public Empregado addEmpregado(@RequestBody Empregado empregado){
        return service.add(empregado);
    }

    @PutMapping("/employee/{id}")
    public Empregado updateEmpregado(@PathVariable(value = "id") Long id,@RequestBody Empregado empregado) throws Exception {
        return service.update(id, empregado);
    }

    @DeleteMapping("/employee/{id}")
    public boolean updateEmpregado(@PathVariable(value = "id") Long id) throws Exception {
        return service.delete(id);
    }
}
