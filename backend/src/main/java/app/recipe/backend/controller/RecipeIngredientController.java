package app.recipe.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import app.recipe.backend.model.RecipeIngredient;
import app.recipe.backend.service.interfaces.RecipeIngredientService;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v0/recipe-ingredients")
public class RecipeIngredientController {
    
    @Autowired
	private RecipeIngredientService recipeIngredientService;

    @PostMapping
	public ResponseEntity<RecipeIngredient> add(@RequestBody final RecipeIngredient recipe){
		return new ResponseEntity<>(recipeIngredientService.add(recipe), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<RecipeIngredient>> getAll(){
		return new ResponseEntity<>(recipeIngredientService.findAll(), HttpStatus.OK);
	}

    @GetMapping("/{id}")
    public ResponseEntity<RecipeIngredient> getById(@PathVariable UUID id) {
        RecipeIngredient recipeIngredient = recipeIngredientService.findById(id);
        if (recipeIngredient != null) {
            return new ResponseEntity<>(recipeIngredient, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<RecipeIngredient> update(@PathVariable UUID id, @RequestBody RecipeIngredient recipeIngredient) {
        recipeIngredient.setId(id);
        try {
            RecipeIngredient updatedRecipeIngredient = recipeIngredientService.update(recipeIngredient);
            return new ResponseEntity<>(updatedRecipeIngredient, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        try {
            recipeIngredientService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
