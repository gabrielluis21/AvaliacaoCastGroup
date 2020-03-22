package br.com.cast.avaliacao.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name ="role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long codigo;

    @Column(name = "nome", nullable = false)
    private String nome;

    @ManyToMany(mappedBy = "roles")
    Set<Usuario> users;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }

    public String getName() {
        return nome;
    }

    public void setName(String name) {
        this.nome = name;
    }

    public Set<Usuario> getUsers() {
        return users;
    }

    public void setUsers(Set<Usuario> users) {
        this.users = users;
    }
}
