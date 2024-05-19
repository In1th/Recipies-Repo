package app.recipe.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import app.recipe.backend.model.Ingredient;
import app.recipe.backend.service.interfaces.IngredientService;
import java.util.UUID;

@CrossOrigin(origins = {"http://frontend:3000", "http://frontend:80"}, allowedHeaders = "*")
@RestController
@RequestMapping("/api/v0/ingredients")
public class IngredientController {

    @Autowired
	private IngredientService ingredientService;

    @PostMapping
	public ResponseEntity<Ingredient> add(@RequestBody final Ingredient recipe){
		return new ResponseEntity<>(ingredientService.add(recipe), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Ingredient>> getAll(){
		return new ResponseEntity<>(ingredientService.findAll(), HttpStatus.OK);
	}

    @GetMapping("/{id}")
    public ResponseEntity<Ingredient> getById(@PathVariable UUID id) {
        Ingredient ingredient = ingredientService.findById(id);
        if (ingredient != null) {
            return new ResponseEntity<>(ingredient, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ingredient> update(@PathVariable UUID id, @RequestBody Ingredient ingredient) {
        ingredient.setUuid(id);
        try {
            Ingredient updatedIngredient = ingredientService.update(ingredient);
            return new ResponseEntity<>(updatedIngredient, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        try {
            ingredientService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
