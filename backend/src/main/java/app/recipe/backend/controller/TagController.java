package app.recipe.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;
import app.recipe.backend.model.Tag;
import app.recipe.backend.service.interfaces.TagService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v0/tags")
public class TagController {

    @Autowired
	private TagService tagService;

    @PostMapping
	public ResponseEntity<Tag> add(@RequestBody final Tag recipe){
		return new ResponseEntity<>(tagService.add(recipe), HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<Tag>> getAll(){
		return new ResponseEntity<>(tagService.findAll(), HttpStatus.OK);
	}

    @GetMapping("/{id}")
    public ResponseEntity<Tag> getById(@PathVariable UUID id) {
        Tag tag = tagService.findById(id);
        if (tag != null) {
            return new ResponseEntity<>(tag, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tag> update(@PathVariable UUID id, @RequestBody Tag tag) {
        tag.setUuid(id); 
        try {
            Tag updatedTag = tagService.update(tag);
            return new ResponseEntity<>(updatedTag, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        try {
            tagService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
