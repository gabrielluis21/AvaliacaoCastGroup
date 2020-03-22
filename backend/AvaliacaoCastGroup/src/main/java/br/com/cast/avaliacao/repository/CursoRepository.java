package br.com.cast.avaliacao.repository;

import br.com.cast.avaliacao.model.Curso;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;

public interface CursoRepository extends CrudRepository<Curso, Long> {
    Curso findByAssunto(String assunto);
    Curso findByDataInicio(Date dataInicio);
    Curso findByDataTermino(Date dataFim);
}
