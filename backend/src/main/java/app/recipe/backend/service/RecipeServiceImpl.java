package app.recipe.backend.service;

import app.recipe.backend.model.Recipe;
import app.recipe.backend.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService<Recipe>{

	@Autowired
	private RecipeRepository recipeRepository;

	@Override
	public Recipe add(Recipe object){
		return recipeRepository.save(object);
	}

	@Override
	public List<Recipe> findAll(){
		return recipeRepository.findAll();
	}
}
