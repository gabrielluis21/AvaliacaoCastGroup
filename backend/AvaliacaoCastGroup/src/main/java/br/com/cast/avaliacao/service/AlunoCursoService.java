package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Aluno;
import br.com.cast.avaliacao.model.AlunoCurso;
import br.com.cast.avaliacao.model.Curso;
import br.com.cast.avaliacao.repository.AlunoCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoCursoService {

    @Autowired
    private AlunoCursoRepository repository;

    public List<AlunoCurso> getAll(){
        List<AlunoCurso> alunoCursos = new ArrayList<>();
        repository.findAll().forEach(alunoCursos::add);
        return alunoCursos;
    }

    public AlunoCurso getById(Long id) throws Exception{
        return repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado!"));
    }

    public AlunoCurso getByCurso(Curso curso) throws Exception{
        AlunoCurso alunoCurso = repository.findByCurso(curso);
        if (alunoCurso == null)
            throw  new Exception("Nenhum resultado");

        return alunoCurso;
    }

    public AlunoCurso getByAluno(Aluno aluno) throws Exception{
        AlunoCurso alunoCurso = repository.findByAluno(aluno);
        if (alunoCurso == null)
            throw  new Exception("Nenhum resultado");

        return alunoCurso;
    }

    public Long cout(){
        return repository.count();
    }

    public AlunoCurso add(AlunoCurso newAlunoCurso) throws Exception{
        AlunoCurso alunoCurso = repository.save(newAlunoCurso);
        if (alunoCurso == null)
            throw  new Exception("falha ao salvar");

        return alunoCurso;
    }

    public AlunoCurso update(Long id, AlunoCurso newAlunoCurso) throws Exception{
        AlunoCurso old = repository.findById(id).orElseThrow(() -> new Exception("Nenhum resultado!"));
        if (old != null) {
            old.setAluno(newAlunoCurso.getAluno());
            old.setCodigo(newAlunoCurso.getCodigo());
            old.setInicio(newAlunoCurso.getInicio());
            old.setFim(newAlunoCurso.getFim());
            repository.save(old);
        }
        return old;
    }

    public boolean delete(Long id) throws Exception{
        boolean isDeleted = false;
        AlunoCurso old = repository.findById(id).orElseThrow(() -> new Exception("Nenhum resultado!"));
        if (old != null) {
            repository.delete(old);
            isDeleted =true;
        }
        return isDeleted;
    }
}
