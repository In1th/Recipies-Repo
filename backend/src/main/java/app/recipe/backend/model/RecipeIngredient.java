package app.recipe.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "recipe_ingredients")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecipeIngredient {

	@Id
	@GeneratedValue
	@Column(unique = true, nullable = false, updatable = false)
	private UUID id;

//	@ManyToOne(fetch = FetchType.EAGER)
//	@JoinColumn(name = "recipe_uuid", nullable = false)
//	private Recipe recipe;

	@OneToOne(cascade = CascadeType.ALL)
	private Ingredient ingredient;

	private String quantity;
}