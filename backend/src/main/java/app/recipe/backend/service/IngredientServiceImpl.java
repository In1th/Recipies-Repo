package app.recipe.backend.service;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.recipe.backend.model.Ingredient;
import app.recipe.backend.repository.IngredientRepository;
import app.recipe.backend.service.interfaces.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    @Override
    public Ingredient add(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    @Override
    public List<Ingredient> findAll() {
        return ingredientRepository.findAll();
    }

    @Override
    public Ingredient findById(UUID id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    @Override
    public Ingredient update(Ingredient ingredient) {
        if (ingredientRepository.existsById(ingredient.getUuid())) {
            return ingredientRepository.save(ingredient);
        } else {
            throw new IllegalArgumentException("Ingredient not found");
        }
    }

    @Override
    public Ingredient delete(UUID id) {
        Ingredient ingredient = findById(id);
        if (ingredient != null) {
            ingredientRepository.deleteById(id);
            return ingredient;
        } else {
            throw new IllegalArgumentException("Ingredient not found");
        }
    }
}
