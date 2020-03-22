package br.com.cast.avaliacao.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "aluno_curso")
public class AlunoCurso {

    @Id
    private long codigo;

    @ManyToOne
    @JoinColumn(name = "aluno_codigo", referencedColumnName = "codigo")
    private Aluno aluno;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="curso_codigo", referencedColumnName = "codigo")
    private Curso curso;

    @Column(name = "dataInicio", nullable = false)
    private Date inicio;

    @Column(name = "dataFim", nullable = false)
    private Date fim;

    public long getCodigo() {
        return codigo;
    }

    public void setCodigo(long codigo) {
        this.codigo = codigo;
    }

    public Aluno getAluno() {
        return aluno;
    }

    public void setAluno(Aluno aluno) {
        this.aluno = aluno;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Date getInicio() {
        return inicio;
    }

    public void setInicio(Date inicio) {
        this.inicio = inicio;
    }

    public Date getFim() {
        return fim;
    }

    public void setFim(Date fim) {
        this.fim = fim;
    }
}
