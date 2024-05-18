package app.recipe.backend.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.recipe.backend.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> { }
