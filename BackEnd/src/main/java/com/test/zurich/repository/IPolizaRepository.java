package com.test.zurich.repository;

import com.test.zurich.model.Poliza;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IPolizaRepository  extends JpaRepository<Poliza,Long> {
    Optional<Poliza> findByTipoPoliza(String tipoPoliza);
}
