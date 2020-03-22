package br.com.cast.avaliacao.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "empregado")
public class Empregado {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long codigo;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cargo", nullable = false)
    private String cargo;

    @Column(name = "dataNacimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "dataAdmissao", nullable = false)
    private Date dataAdmissao;

    @OneToOne(cascade = CascadeType.ALL)
    private Usuario usuario;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }
}
