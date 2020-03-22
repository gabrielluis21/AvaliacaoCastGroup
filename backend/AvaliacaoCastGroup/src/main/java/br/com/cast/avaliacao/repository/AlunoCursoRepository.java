package br.com.cast.avaliacao.repository;

import br.com.cast.avaliacao.model.Aluno;
import br.com.cast.avaliacao.model.AlunoCurso;
import br.com.cast.avaliacao.model.Curso;
import org.springframework.data.repository.CrudRepository;

public interface AlunoCursoRepository extends CrudRepository<AlunoCurso, Long> {
    AlunoCurso findByCurso(Curso curso);

    AlunoCurso findByAluno(Aluno aluno);

    AlunoCurso findByCursoAndAluno(Curso curso, Aluno aluno);

    long count();
}
