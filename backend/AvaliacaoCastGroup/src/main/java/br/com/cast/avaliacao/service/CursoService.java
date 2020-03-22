package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Categoria;
import br.com.cast.avaliacao.model.Curso;
import br.com.cast.avaliacao.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository repository;

    public List<Curso> getAll(){
        List<Curso> cursos = new ArrayList<>();
        this.repository.findAll().forEach(cursos::add);
        return cursos;
    }

    public Curso getById(Long id) throws Exception {
        Curso curso;
        curso = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        return curso;
    }

    public  Curso getByAssunto(String assunto){
        Curso curso;
        curso = this.repository.findByAssunto(assunto);
        return curso;
    }

    public Curso getByDataInicio(Date dataInicio){
        Curso curso;
        curso = this.repository.findByDataInicio(dataInicio);
        return curso;

    }

    public Curso getByDataFim(Date dataFim){
        Curso curso;
        curso = this.repository.findByDataTermino(dataFim);
        return curso;
    }

    public Curso add(Curso curso) {
        return this.repository.save(curso);
    }

    public Curso update(Long id, Curso curso) {
        Curso old = this.repository.findById(id).orElseThrow(()-> new RuntimeException("Não foi possivel encontrar a categoria"));
        if(old != null){
            old.setAssunto(curso.getAssunto());
            old.setDataInicio(curso.getDataInicio());
            old.setDataTermino(curso.getDataInicio());
            old.setCategoria(curso.getCategoria());
            this.repository.save(old);
        }

        return old;
    }

    public boolean delete(Long id) {
        boolean isDeleted = false;
        Curso old = this.repository.findById(id).orElseThrow(()-> new RuntimeException("Nenhum resultado"));
        if(old != null){
            this.repository.delete(old);
            isDeleted = true;
        }
        return isDeleted;
    }
}
