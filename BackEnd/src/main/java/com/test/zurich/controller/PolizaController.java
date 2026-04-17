package com.test.zurich.controller;

import com.test.zurich.model.Poliza;
import com.test.zurich.service.PolizaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/poliza")
public class PolizaController {

    private final PolizaService polizaService;

    public PolizaController(PolizaService polizaService) {
        this.polizaService = polizaService;
    }

    @PostMapping
    public ResponseEntity<Poliza> createCliente(@RequestBody Poliza poliza) {
        Poliza nuevoCliente = polizaService.createPoliza(poliza);
        return ResponseEntity.ok(nuevoCliente);
    }

    @GetMapping
    public ResponseEntity<List<Poliza>> getAllPolizas() {
        return ResponseEntity.ok(polizaService.getAllPolizas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Poliza> getPolizaById(@PathVariable Long id) {
        return ResponseEntity.ok(polizaService.getPolizaById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Poliza> updatePoliza(
            @PathVariable Long id,
            @RequestBody Poliza poliza) {
        return ResponseEntity.ok(polizaService.updatePoliza(id, poliza));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoliza(@PathVariable Long id) {
        polizaService.deletePoliza(id);
        return ResponseEntity.noContent().build();
    }
}
