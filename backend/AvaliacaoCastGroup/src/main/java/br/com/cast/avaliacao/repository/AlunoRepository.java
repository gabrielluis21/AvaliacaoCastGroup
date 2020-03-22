package br.com.cast.avaliacao.repository;

import br.com.cast.avaliacao.model.Aluno;
import org.springframework.data.repository.CrudRepository;

public interface AlunoRepository extends CrudRepository<Aluno, Long> {
}
