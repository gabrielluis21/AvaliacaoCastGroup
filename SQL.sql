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

