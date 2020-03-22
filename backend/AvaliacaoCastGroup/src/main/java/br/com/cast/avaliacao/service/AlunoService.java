package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Aluno;
import br.com.cast.avaliacao.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public List<Aluno> getAll(){
        List<Aluno> alunos = new ArrayList<>();
        repository.findAll().forEach(alunos::add);
        return alunos;
    }

    public Aluno getById(Long id) throws Exception {
        Aluno aluno;
        aluno = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        return aluno;
    }

    public Aluno add(Aluno aluno){
        Aluno newAluno;
        newAluno = repository.save(aluno);
        return newAluno;
    }

    public Aluno update(Long id, Aluno aluno) throws Exception {
        Aluno old;
        old = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        if(old != null){
            old.setNome(aluno.getNome());
            old.setEndereco(aluno.getEndereco());
            old.setTelefone(aluno.getTelefone());
            old.setDataNascimento(aluno.getDataNascimento());
            repository.save(old);
        }
        return old;
    }

    public boolean delete(Long id) throws Exception {
        boolean isDeleted = false;
        Aluno aluno;
        aluno = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        if(aluno != null){
            repository.delete(aluno);
            isDeleted = true;
        }
        return isDeleted;
    }
}
