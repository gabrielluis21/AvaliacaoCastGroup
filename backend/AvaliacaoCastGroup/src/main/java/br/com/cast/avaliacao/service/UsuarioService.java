package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Role;
import br.com.cast.avaliacao.model.Usuario;
import br.com.cast.avaliacao.repository.RoleRepository;
import br.com.cast.avaliacao.repository.UsuarioRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    public List<Usuario> getAll(){
        List<Usuario> usuarios = new ArrayList<>();
        repository.findAll().forEach(usuarios::add );
        return usuarios;
    }

    public Usuario getById(Long id) throws Exception {
        return repository.findById(id).orElseThrow(() -> new Exception("Nenhum resultad!!"));
    }

    public  Usuario getByUserName(String userName) throws Exception {
        Usuario usuario = repository.findByUserName(userName);
        if(usuario == null)
            throw new Exception("Nenhum resultado!");

        return usuario;
    }

    public  Usuario getByEmailAndSenha(String email, String senha) throws Exception {
        Usuario usuario = repository.findByEmailAndSenha(email, senha);
        if(usuario == null)
            throw new Exception("Nenhum resultado!");

        return usuario;
    }

    public  Usuario add(Usuario newUser) throws Exception {
        Usuario usuario = repository.save(newUser);
        if(usuario == null)
            throw new Exception("Nenhum resultado!");

        return usuario;
    }

    public  Usuario update(Long id, Usuario newUser) throws Exception {
        Usuario old = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        if(old != null){
            old.setUserName(newUser.getUserName());
            old.setEmail(newUser.getEmail());
            old.setSenha(newUser.getSenha());
            old.setConfirmSenha(newUser.getConfirmSenha());
            repository.save(old);
        }

        return old;
    }

    public boolean delete(Long id) throws Exception {
        boolean isDeleted = false;
        Usuario old = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        if(old != null){
            repository.delete(old);
            isDeleted = true;
        }

        return isDeleted;
    }
}
