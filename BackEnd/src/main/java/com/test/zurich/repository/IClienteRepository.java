package com.test.zurich.repository;

import com.test.zurich.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IClienteRepository extends JpaRepository<Cliente,Long> {
    Optional<Cliente> findByNombre(String nombre);
}
