package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Inmueble;
import com.example.demo.services.InmuebleService;

@RestController
@RequestMapping("/api/inmueble")
@CrossOrigin(origins = "*")
public class InmuebleController {
    @Autowired
    private InmuebleService inmuebleService;

    @GetMapping
    public List<Inmueble> listar(){
        return inmuebleService.listarTodos();
    }
    
    @GetMapping("/{id}")
    public Inmueble getUsuarioById(@PathVariable("id") Long id ){
        return inmuebleService.listarById(id);
    } 
    
    @PostMapping
    public Inmueble insertar(@RequestBody Inmueble inmuebleBody){
        return inmuebleService.insertar(inmuebleBody);
    }
    
    @PutMapping("/editar/{id}")
    public Inmueble actualizar(@PathVariable Long id, @RequestBody Inmueble inmuebleBody){
        inmuebleBody.setId(id);
        return inmuebleService.actualizar(id, inmuebleBody);
    }

    @PutMapping("/eliminar/{id}")
    public List<Inmueble> eliminar(@PathVariable Long id){
        return inmuebleService.eliminar(id);
    }
}
