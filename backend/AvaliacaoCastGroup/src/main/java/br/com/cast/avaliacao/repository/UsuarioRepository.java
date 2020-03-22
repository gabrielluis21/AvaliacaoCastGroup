package br.com.cast.avaliacao.repository;

import br.com.cast.avaliacao.model.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    Usuario findByUserName(String username);
    Usuario findByEmailAndSenha(String email, String senha);

}
