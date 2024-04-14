package app.recipe.backend.service;

import java.util.List;

public interface SearchRecipeService<T>{
	List<T> findByTitle(String title);
}