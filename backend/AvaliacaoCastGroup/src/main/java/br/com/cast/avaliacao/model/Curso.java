package br.com.cast.avaliacao.model;

import org.springframework.context.annotation.Primary;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "curso")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long codigo;

    @Column(name = "assunto", nullable = false)
    private String assunto;

    @Column(name = "dataInicio", nullable = false)
    private Date dataInicio;

    @Column(name = "dataFim", nullable = false)
    private Date dataTermino;

    @ManyToOne
    private  Categoria categoria;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataTermino() {
        return dataTermino;
    }

    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
