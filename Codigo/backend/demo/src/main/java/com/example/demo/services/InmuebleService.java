package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Inmueble;
import com.example.demo.models.Usuario;
import com.example.demo.repository.InmuebleRepository;
import com.example.demo.repository.UsuarioRepository;

@Service
public class InmuebleService {
    @Autowired
    private InmuebleRepository inmuebleRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Inmueble insertar (Inmueble inmueble){
        Optional<Usuario> optionalVendedor = usuarioRepository.findById(inmueble.getVendedorEncargado().getId());

        inmueble.setVendedorEncargado(optionalVendedor.get());
        return inmuebleRepository.save(inmueble);        
    }

    public Inmueble actualizar(Long id, Inmueble inmueble) {
        Optional<Inmueble> optionalInmueble = inmuebleRepository.findById(id);

        Optional<Usuario> optionalVendedor = usuarioRepository.findById(inmueble.getVendedorEncargado().getId());
        Optional<Usuario> optionalComprador = usuarioRepository.findById(inmueble.getUsuarioComprador().getId());
        
        inmueble.setUsuarioComprador(optionalComprador.get());
        inmueble.setVendedorEncargado(optionalVendedor.get());

        if (optionalInmueble.isEmpty()) {
            return null;
        }
        Inmueble inmuebleEditado = optionalInmueble.get();
        copiarCamposNoNulos(inmueble, inmuebleEditado);
        return inmuebleRepository.save(inmuebleEditado);
    }
    
    
    public List<Inmueble> listarTodos(){
        return inmuebleRepository.findAll();
    }

    public Inmueble listarById(Long id){
        return inmuebleRepository.findById(id).get();
    }
    
    public List<Inmueble> eliminar(Long id){
        inmuebleRepository.deleteById(id);
        return inmuebleRepository.findByEstado();
    }

    private void copiarCamposNoNulos(Inmueble fuente, Inmueble destino) {
        if (fuente.getTipo() != null || fuente.getTipo()=="") {
            destino.setTipo((fuente.getTipo()));
        }
        if (fuente.getPrecio() != null || fuente.getPrecio() == 0) {
            destino.setPrecio(fuente.getPrecio());
        }
        if (fuente.getUsuarioComprador() != null ) {
            destino.setUsuarioComprador(fuente.getUsuarioComprador());
        }
        if (fuente.getVendedorEncargado() != null ) {
            destino.setVendedorEncargado(fuente.getVendedorEncargado());
        }
        if (fuente.getEstado() != null || fuente.getEstado()=="") {
            destino.setEstado(fuente.getEstado());
        }
    }
}
