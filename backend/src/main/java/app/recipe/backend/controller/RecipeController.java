package app.recipe.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.recipe.backend.model.Recipe;
import app.recipe.backend.service.interfaces.RecipeService;

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