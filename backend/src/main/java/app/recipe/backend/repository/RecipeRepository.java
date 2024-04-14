package app.recipe.backend.repository;

import app.recipe.backend.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, UUID>{

	@Query(value = "SELECT * FROM recipes", nativeQuery = true)
	List<Recipe> findAll();
}
