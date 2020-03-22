package br.com.cast.avaliacao.service;

import br.com.cast.avaliacao.model.Categoria;
import br.com.cast.avaliacao.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> getAll() {
        List<Categoria> categorias = new ArrayList<>();
        this.repository.findAll().forEach(categorias::add);
        return categorias;
    }

    public Categoria getById(Long id) throws Exception {
        Categoria categoria;
        categoria = repository.findById(id).orElseThrow(()-> new Exception("Nenhum resultado"));
        return categoria;
    }

    public Categoria add(String descricao) {
        Categoria newCategoria = new Categoria();
        newCategoria.setDescricao(descricao);
       return this.repository.save(newCategoria);
    }

    public Categoria update(Long id, String descricao) {
        Categoria old = this.repository.findById(id).orElseThrow(()-> new RuntimeException("Não foi possivel encontrar a categoria"));
        if(old != null){
            old.setDescricao(descricao);
            this.repository.save(old);
        }

        return old;
    }

    public boolean delete(Long id) {
        boolean isDeleted = false;
        Categoria old = this.repository.findById(id).orElseThrow(()-> new RuntimeException("Não foi possivel encontrar a categoria"));
        if(old != null){
            this.repository.delete(old);
            isDeleted = true;
        }
        return isDeleted;
    }
}
