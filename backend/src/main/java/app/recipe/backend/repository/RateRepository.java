package app.recipe.backend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.recipe.backend.model.Rate;

@Repository
public interface RateRepository extends JpaRepository<Rate, UUID> {
    public List<Rate> findByIdRecipe(UUID idRecipe);
}
