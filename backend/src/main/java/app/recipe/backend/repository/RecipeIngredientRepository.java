package app.recipe.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.recipe.backend.model.RecipeIngredient;
import java.util.UUID;

@Repository
public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, UUID> { }
