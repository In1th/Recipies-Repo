package app.recipe.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.recipe.backend.model.Rate;
import app.recipe.backend.service.interfaces.RateService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v0/rates")
public class RateController {

    @Autowired
    private RateService rateService;

    @PostMapping
    public ResponseEntity<Rate> add(@RequestBody Rate rate) {
        Rate addedRate = rateService.add(rate);
        return new ResponseEntity<>(addedRate, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Rate>> getAll() {
        List<Rate> rates = rateService.findAll();
        return new ResponseEntity<>(rates, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rate> getById(@PathVariable UUID id) {
        Rate rate = rateService.findById(id);
        if (rate != null) {
            return new ResponseEntity<>(rate, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/recipe/{id}")
    public ResponseEntity<List<Rate>> getByRecipe(@PathVariable UUID id) {
        List<Rate> rates = rateService.findByRecipe(id);
        if (rates != null && !rates.isEmpty()) {
            return new ResponseEntity<>(rates, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rate> update(@PathVariable UUID id, @RequestBody Rate rate) {
        rate.setId(id);
        try {
            Rate updatedRate = rateService.update(rate);
            return new ResponseEntity<>(updatedRate, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        try {
            rateService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
