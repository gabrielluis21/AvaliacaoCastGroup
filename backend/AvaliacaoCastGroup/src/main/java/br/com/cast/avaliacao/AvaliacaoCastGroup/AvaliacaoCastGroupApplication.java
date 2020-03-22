package br.com.cast.avaliacao.AvaliacaoCastGroup;

import br.com.cast.avaliacao.controller.CategoriaController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(
	basePackages = {
	  "br.com.cast.avaliacao.controller",
	  "br.com.cast.avaliacao.service",
	  "br.com.cast.avaliacao.repository",
	  "br.com.cast.avaliacao.security"
	})
@EntityScan("br.com.cast.avaliacao.model")
@EnableJpaRepositories("br.com.cast.avaliacao.repository")
public class AvaliacaoCastGroupApplication {
	public static void main(String[] args) {
		SpringApplication.run(AvaliacaoCastGroupApplication.class, args);
	}
}
