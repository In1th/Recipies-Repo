package app.recipe.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.recipe.backend.model.Ingredient;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, UUID> { }
