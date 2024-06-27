package app.recipe.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.recipe.backend.model.Rate;
import app.recipe.backend.repository.RateRepository;
import app.recipe.backend.service.interfaces.RateService;

@Service
public class RateServiceImpl implements RateService {

    @Autowired
    private RateRepository rateRepository;

    @Override
    public Rate add(Rate rate) {
        return rateRepository.save(rate);
    }

    @Override
    public List<Rate> findAll() {
        return rateRepository.findAll();
    }

    @Override
    public Rate findById(UUID id) {
        Optional<Rate> optionalRate = rateRepository.findById(id);
        return optionalRate.orElse(null);
    }

    @Override
    public Rate update(Rate rate) {
        if (rateRepository.existsById(rate.getId())) {
            return rateRepository.save(rate);
        } else {
            throw new IllegalArgumentException("Rate not found");
        }
    }

    @Override
    public Rate delete(UUID id) {
        Optional<Rate> optionalRate = rateRepository.findById(id);
        if (optionalRate.isPresent()) {
            Rate rate = optionalRate.get();
            rateRepository.deleteById(id);
            return rate;
        } else {
            throw new IllegalArgumentException("Rate not found");
        }
    }

    @Override
    public List<Rate> findByRecipe(UUID idRecipe) {
        List<Rate> rates = rateRepository.findByIdRecipe(idRecipe);
        if (rates.isEmpty()) {
            throw new IllegalArgumentException("No rates found for the given recipe");
        }
        return rates;
    }

    @Override
    public float getAvgByRecipe(UUID id) {
        List<Rate> ratings = rateRepository.findByIdRecipe(id);
        if (ratings.isEmpty()) {
            throw new IllegalArgumentException("Recipe not found for id: " + id);
        }

        float sum = 0;
        for (Rate rate : ratings) {
            sum += rate.getRate();
        }
        return sum / ratings.size();
    }
}
