package app.recipe.backend.service;

import java.util.List;

public interface RecipeService<T>{
	T add(final T object);
	List<T> findAll();
}
