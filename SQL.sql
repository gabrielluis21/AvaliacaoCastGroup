create database CASTGROUPCOURSES

use CASTGROUPCOURSES

CREATE TABLE `aluno` (
  `codigo` bigint NOT NULL,
  `data_nascimento` datetime NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `user_codigo` bigint DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FKm858vk5teurnbs7ui2o7bud9e` (`user_codigo`),
  CONSTRAINT `FKm858vk5teurnbs7ui2o7bud9e` FOREIGN KEY (`user_codigo`) REFERENCES `usuario` (`codigo`)
);

CREATE TABLE `categoria` (
  `codigo` bigint NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
);

CREATE TABLE `curso` (
  `codigo` bigint NOT NULL,
  `assunto` varchar(255) NOT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime NOT NULL,
  `categoria_codigo` bigint DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FKecf41a14jfo782u6bkncaqtl2` (`categoria_codigo`),
  CONSTRAINT `FKecf41a14jfo782u6bkncaqtl2` FOREIGN KEY (`categoria_codigo`) REFERENCES `categoria` (`codigo`)
);

CREATE TABLE `empregado` (
  `codigo` bigint NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `data_admissao` datetime NOT NULL,
  `data_nacimento` datetime NOT NULL,
  `nome` varchar(255) NOT NULL,
  `usuario_codigo` bigint DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FK1kgcx2xvyeebpu7fymase87q1` (`usuario_codigo`),
  CONSTRAINT `FK1kgcx2xvyeebpu7fymase87q1` FOREIGN KEY (`usuario_codigo`) REFERENCES `usuario` (`codigo`)
);

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
);

CREATE TABLE `role` (
  `codigo` bigint NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
);

CREATE TABLE `usuario` (
  `codigo` bigint NOT NULL,
  `email` varchar(80) NOT NULL,
  `senha` varchar(8) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
);

CREATE TABLE `usuario_role` (
  `usuario_codigo` bigint NOT NULL,
  `role_codigo` bigint NOT NULL,
  PRIMARY KEY (`usuario_codigo`,`role_codigo`),
  KEY `FKgbtdoimktlvm3brk1bosdlr5r` (`role_codigo`),
  CONSTRAINT `FKgbtdoimktlvm3brk1bosdlr5r` FOREIGN KEY (`role_codigo`) REFERENCES `role` (`codigo`),
  CONSTRAINT `FKo75agmt2lywcricgkv3st0v00` FOREIGN KEY (`usuario_codigo`) REFERENCES `usuario` (`codigo`)
);

CREATE TABLE `aluno_curso` (
  `codigo` bigint NOT NULL,
  `data_fim` datetime NOT NULL,
  `data_inicio` datetime NOT NULL,
  `aluno_codigo` bigint DEFAULT NULL,
  `curso_codigo` bigint DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FK7a2kq5dgg0sxdf42kn8bsxvhf` (`aluno_codigo`),
  KEY `FK96cbl2bvgx0cxurq750eomako` (`curso_codigo`),
  CONSTRAINT `FK7a2kq5dgg0sxdf42kn8bsxvhf` FOREIGN KEY (`aluno_codigo`) REFERENCES `aluno` (`codigo`),
  CONSTRAINT `FK96cbl2bvgx0cxurq750eomako` FOREIGN KEY (`curso_codigo`) REFERENCES `curso` (`codigo`)
);


insert into categoria values(1, 'Comportamental');
insert into categoria values(2, 'Programação');
insert into categoria values(3,  'Qualidade');
insert into categoria values(4, 'Processos');

insert into role values(1,'admin');
insert into role values(2, 'funcionário');
insert into role values(3, 'usuario');

INSERT INTO curso VALUES(1,'Java', now(), now(), 2);
INSERT INTO curso VALUES(2,'JavaScript',now(),now(),2);
INSERT INTO curso VALUES(3,'React',now(),now(),2);
INSERT INTO curso VALUES(4,'Angular',now(),now(),2);

INSERT INTO usuario VALUES(1,'gabrielluis_21@hotmail.com','2L8PFGK','gabriel.silva');
INSERT INTO usuario VALUES(2,'admin@admin.com','LL8PFGK','ADMIN');
INSERT INTO usuario VALUES(3,'teste@cast.com.br','12345678','test');
INSERT INTO usuario VALUES(4,'g.luis@gmail.com','7H5PFGK','g.luis');

INSERT INTO usuario_role VALUES( 1, 1);
INSERT INTO usuario_role VALUES( 2, 1);
INSERT INTO usuario_role VALUES( 3, 3);
INSERT INTO usuario_role VALUES( 4, 2);

INSERT INTO empregado VALUES(1,'Análista desenvolvedor Jr','2020-04-05','1994-01-21','Gabriel',1);
INSERT INTO empregado VALUES(2,'Estágiario','2019-04-05','2000-10-21','Roberto', 2);

INSERT INTO aluno VALUES(1,'1994-01-21','R. Domingos Calderazzo 87 Jardim Pagliuso','Gabriel','(16)98120-2154', 'Taquaritinga',1);
INSERT INTO aluno VALUES(2,'1994-06-06','R. Carlos Gomes 144 Centro', 'Vinícios','(16)99755-0105', 'Araraquara', 4);

INSERT INTO aluno_curso VALUES(1,'2020-09-25','2020-03-25',1,3);
INSERT INTO aluno_curso VALUES(1,'2020-09-25','2020-03-25',1,1);
INSERT INTO aluno_curso VALUES(1,'2020-09-25','2020-03-25',1,2);
INSERT INTO aluno_curso VALUES(1,'2020-09-25','2020-03-25',1,4);

