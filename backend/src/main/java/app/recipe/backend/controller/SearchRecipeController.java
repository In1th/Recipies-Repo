package app.recipe.backend.controller;

import app.recipe.backend.service.SearchRecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v0/recipes/search")
public class SearchRecipeController{

	@Autowired
	private SearchRecipeService<String> searchRecipeService;

	@GetMapping
	public ResponseEntity<List<String>> findByTitle(@RequestParam String title){
		return new ResponseEntity<>(searchRecipeService.findByTitle(title), HttpStatus.OK);
	}
}
