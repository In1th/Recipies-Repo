package app.recipe.backend.service.interfaces;

import java.util.List;

public interface SearchRecipeService<T>{
	List<T> findByTitle(String title);
}