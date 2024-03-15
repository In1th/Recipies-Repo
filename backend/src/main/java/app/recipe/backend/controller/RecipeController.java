package app.recipe.backend.controller;

import app.recipe.backend.model.Recipe;
import app.recipe.backend.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // na jakim porcie działa svelt?
@RestController
@RequestMapping("/api/v0/recipes")
public class RecipeController{

	@Autowired
	private RecipeService<Recipe> recipeService;

	@PostMapping
	public ResponseEntity<Recipe> add(@RequestBody final Recipe recipe){
		return new ResponseEntity<>(recipeService.add(recipe), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Recipe>> getAll(){
		return new ResponseEntity<>(recipeService.findAll(), HttpStatus.OK);
	}
}
