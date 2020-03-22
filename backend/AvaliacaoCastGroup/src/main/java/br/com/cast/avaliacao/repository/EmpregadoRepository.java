package br.com.cast.avaliacao.repository;

import br.com.cast.avaliacao.model.Empregado;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface EmpregadoRepository extends CrudRepository<Empregado, Long> {

    Empregado findByCargoAndCodigo(String cargo, Long id);
    List<Empregado> findAllByCargo(String cargo);
    Empregado findByDataAdmissaoAndCodigo(Date admissao, Long id);
    List<Empregado> findAllByDataAdmissao(Date admissao);

}
