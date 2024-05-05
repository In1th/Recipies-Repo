package app.recipe.backend.service;

import app.recipe.backend.repository.SearchRecipeRepository;
import app.recipe.backend.service.interfaces.SearchRecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchRecipeServiceImpl implements SearchRecipeService<String>{

	@Autowired
	private SearchRecipeRepository searchRecipeRepository;

	@Override
	public List<String> findByTitle(String title){
		return searchRecipeRepository.findByTitle(title);
	}
}
