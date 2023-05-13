package com.example.demo.repository;

import com.example.demo.models.Inmueble;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InmuebleRepository extends JpaRepository<Inmueble, Long>{
    @Modifying
    @Query("UPDATE Inmueble i SET i.estado = null WHERE i.id = ?1")
    public void deleteById(Long id);

    @Query("SELECT i FROM Inmueble i WHERE i.estado != null ORDER BY i.estado ASC")
    public List<Inmueble> findByEstado();
}
