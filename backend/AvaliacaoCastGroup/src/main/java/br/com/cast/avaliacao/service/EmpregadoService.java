package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Empregado;
import br.com.cast.avaliacao.repository.EmpregadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class EmpregadoService {

    @Autowired
    private EmpregadoRepository repository;

    public List<Empregado> getAll(){
        List<Empregado> empregados = new ArrayList<>();
        repository.findAll().forEach(empregados::add);
        return empregados;
    }

    public List<Empregado> getAllByCargo(String cargo){
        List<Empregado> empregados = new ArrayList<>();
        repository.findAllByCargo(cargo).forEach(empregados::add);
        return empregados;
    }

    public Empregado getById(Long id) throws Exception {
        return repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
    }

    public Empregado getByIdAndCargo(Long id, String cargo) {
        return repository.findByCargoAndCodigo(cargo, id);
    }

    public List<Empregado> getAllByAdmissao(Date admissao) {
        return repository.findAllByDataAdmissao(admissao);
    }

    public Empregado getByAdmissaoAndId(Date admissao, Long id) {
        return repository.findByDataAdmissaoAndCodigo(admissao, id);
    }

    public Empregado add(Empregado newEmpregado){
        repository.save(newEmpregado);
        return newEmpregado;
    }

    public Empregado update(Long id, Empregado empregado) throws Exception {
        Empregado old = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        old.setNome(empregado.getNome());
        old.setDataNascimento(empregado.getDataNascimento());
        old.setCargo(empregado.getCargo());
        old.setDataAdmissao(empregado.getDataAdmissao());
        repository.save(old);
        return old;
    }

    public boolean delete(Long id) throws Exception {
        boolean isDeleted = false;
        Empregado old = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        if(old != null) {
            repository.delete(old);
            isDeleted = true;
        }

        return isDeleted;
    }
}
