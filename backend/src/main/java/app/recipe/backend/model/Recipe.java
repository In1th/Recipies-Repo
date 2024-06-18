package app.recipe.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "recipes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Recipe{

	@Id
	@GeneratedValue
	@Column(unique = true, nullable = false, updatable = false)
	private UUID uuid;

	@Column(nullable = false)
	private String title;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
	//@OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
	@JoinColumn(name = "recipe_ingredients")
	private List<RecipeIngredient> recipeIngredients = new ArrayList<>();

	@ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Set<Tag> tags;

	@OneToOne(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
	private Category category;

	@Column
	private double time;

	@Column
	private double calories;

	private String mdFilePath;
	private String imagePath;
	private float rate;
}