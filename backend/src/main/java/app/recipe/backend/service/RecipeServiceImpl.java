package app.recipe.backend.service;

import app.recipe.backend.model.Recipe;
import app.recipe.backend.repository.CategoryRepository;
import app.recipe.backend.repository.RecipeRepository;
import app.recipe.backend.service.interfaces.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Recipe add(Recipe recipe) {
		return recipeRepository.save(recipe);
	}

	@Override
	public List<Recipe> findAll() {
		return recipeRepository.findAll();
	}

	@Override
	public Recipe findById(UUID id) {
		Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
		return optionalRecipe.orElse(null);
	}

	@Override
	public Recipe update(Recipe object) {
		if (recipeRepository.existsById(object.getUuid())) {
			return recipeRepository.save(object);
		} else {
			throw new IllegalArgumentException("Recipe not found"); 
		}
	}

	@Override
	public Recipe delete(UUID id) {
		Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            recipeRepository.deleteById(id);
            return recipe;
        } else {
            throw new IllegalArgumentException("Recipe not found");
        }
	}
}
