package com.test.zurich.service;

import com.test.zurich.model.Poliza;
import com.test.zurich.repository.IPolizaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PolizaService {

    private final IPolizaRepository polizaRepository;

    public PolizaService(IPolizaRepository polizaRepository){
        this.polizaRepository = polizaRepository;
    }

    public Poliza createPoliza(Poliza poliza) {
        return polizaRepository.save(poliza);
    }

    public List<Poliza> getAllPolizas() {
        return polizaRepository.findAll();
    }

    public Poliza getPolizaById(Long id) {
        return polizaRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Poliza no encontrado con el  id: " + id));
    }

    public Poliza updatePoliza(Long id, Poliza polizaData) {
        Poliza poliza = getPolizaById (id);
        poliza.setTipoPoliza(polizaData.getTipoPoliza());
        poliza.setId_client(polizaData.getId_client());
        poliza.setFecha_inicio(polizaData.getFecha_inicio());
        poliza.setFecha_fin(polizaData.getFecha_fin());
        poliza.setMonto(polizaData.getMonto());
        poliza.setEstado(polizaData.isEstado());
        return polizaRepository.save(poliza);
    }

    public boolean deletePoliza(Long id) {
        Poliza poliza = getPolizaById(id);
        polizaRepository.delete(poliza);
        return true;
    }
}
