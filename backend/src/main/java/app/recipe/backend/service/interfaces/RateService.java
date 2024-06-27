package app.recipe.backend.service.interfaces;

import java.util.List;
import java.util.UUID;

import app.recipe.backend.model.Rate;

public interface RateService extends BaseService<Rate> { 
	List<Rate> findByRecipe(final UUID id);
	float getAvgByRecipe(final UUID id);
}