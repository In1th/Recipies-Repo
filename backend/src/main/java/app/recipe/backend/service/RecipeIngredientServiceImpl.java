package app.recipe.backend.service;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.recipe.backend.model.RecipeIngredient;
import app.recipe.backend.repository.RecipeIngredientRepository;
import app.recipe.backend.service.interfaces.RecipeIngredientService;

@Service
public class RecipeIngredientServiceImpl implements RecipeIngredientService {

    @Autowired
    private RecipeIngredientRepository recipeIngredientRepository;

    @Override
    public RecipeIngredient add(RecipeIngredient recipeIngredient) {
        return recipeIngredientRepository.save(recipeIngredient);
    }

    @Override
    public List<RecipeIngredient> findAll() {
        return recipeIngredientRepository.findAll();
    }

    @Override
    public RecipeIngredient findById(UUID id) {
        return recipeIngredientRepository.findById(id).orElse(null);
    }

    @Override
    public RecipeIngredient update(RecipeIngredient recipeIngredient) {
        if (recipeIngredientRepository.existsById(recipeIngredient.getId())) {
            return recipeIngredientRepository.save(recipeIngredient);
        } else {
            throw new IllegalArgumentException("RecipeIngredient not found");
        }
    }

    @Override
    public RecipeIngredient delete(UUID id) {
        RecipeIngredient recipeIngredient = findById(id);
        if (recipeIngredient != null) {
            recipeIngredientRepository.deleteById(id);
            return recipeIngredient;
        } else {
            throw new IllegalArgumentException("RecipeIngredient not found");
        }
    }
}
