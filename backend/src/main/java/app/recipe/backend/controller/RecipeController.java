package app.recipe.backend.controller;

import app.recipe.backend.model.Recipe;
import app.recipe.backend.service.interfaces.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v0/recipes")
public class RecipeController{

	@Autowired
	private RecipeService recipeService;

	@PostMapping
	public ResponseEntity<Recipe> add(@RequestBody final Recipe recipe){
		return new ResponseEntity<>(recipeService.add(recipe), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Recipe>> getAll(){
		return new ResponseEntity<>(recipeService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
    public ResponseEntity<Recipe> getById(@PathVariable UUID id) {
        Recipe recipe = recipeService.findById(id);
        if (recipe != null) {
            return new ResponseEntity<>(recipe, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> update(@PathVariable UUID id, @RequestBody Recipe recipe) {
        recipe.setUuid(id);
        try {
            Recipe updatedRecipe = recipeService.update(recipe);
            return new ResponseEntity<>(updatedRecipe, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        try {
            recipeService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}