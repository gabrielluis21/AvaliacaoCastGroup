package br.com.cast.avaliacao.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long codigo;

    @Column(name = "userName", nullable = false)
    private String userName;

    @Column(name = "email", nullable = false, length = 80)
    private String email;

    @Column(name = "senha", nullable = false, length = 8)
    private String senha;

    @Transient
    private String confirmSenha;

    @ManyToMany
    @JoinTable(name="usuario_role",
      joinColumns = @JoinColumn(name = "usuario_codigo"),
      inverseJoinColumns = @JoinColumn(name = "role_codigo")
    )
    private Set<Role> roles;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getConfirmSenha() {
        return confirmSenha;
    }

    public void setConfirmSenha(String confirmSenha) {
        this.confirmSenha = confirmSenha;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
