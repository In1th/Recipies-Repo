package app.recipe.backend.repository;

import app.recipe.backend.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SearchRecipeRepository extends JpaRepository<Recipe, UUID>{

	@Query(value = "SELECT recipes.uuid, recipes.title, recipes.md_file_path FROM recipes WHERE title = ?1", nativeQuery = true)
	List<String> findByTitle(String title);
}
