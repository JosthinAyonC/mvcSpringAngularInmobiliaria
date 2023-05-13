DROP TABLE IF EXISTS inmueble;
DROP TABLE IF EXISTS usuario;

create table usuario(
    id_usuario serial primary key,
    nombre varchar(100),
    apellido varchar(100) ,
    correo varchar(100),
    clave varchar(100),
    roles varchar(100)[],
    estado varchar(1)
);
create table inmueble(
    id_inmueble serial primary key,
    id_usuario_comprador integer,
    id_usuario_vendedor integer,
    tipo varchar(100),
    precio real,
    estado varchar(1),
    constraint fk_usuario_comprador foreign key (id_usuario_comprador) references usuario(id_usuario),
    constraint fk_usuario_vendedor foreign key (id_usuario_vendedor) references usuario(id_usuario),
);
