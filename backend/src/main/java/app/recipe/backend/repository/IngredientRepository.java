package app.recipe.backend.repository;

import org.springframework.stereotype.Repository;
import app.recipe.backend.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, UUID> { }
