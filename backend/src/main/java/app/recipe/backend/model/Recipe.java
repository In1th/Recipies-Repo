package app.recipe.backend.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<Tag> tags;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Category category;

	@Column(nullable = true)
	private double preparationTime;

	@Column(nullable = true)
	private double calories;
	
	private String mdFilePath;
	private String imagePath;
	private float rate;
}
