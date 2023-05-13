import { Usuario } from "./Usuario.model";

export interface Inmueble {
    id: number,
    tipo: string,
    usuarioComprador: Usuario,
    vendedorEncargado: Usuario,
    precio: number,
    estado: string   
}