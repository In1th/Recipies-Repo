package app.recipe.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "category")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
	@Id
	@GeneratedValue
	@Column(unique = true, nullable = false, updatable = false)
	private UUID uuid;
	private String name;

	public Category(String name) {
		this.name = name;
	}
}

/*	CAKES_AND_PIES,
	COOKIES,
	DESSERTS,
	CUPCAKES_AND_MUFFINS,
	DONUTS_AND_BAGELS,
	CHEESECAKES,
	PANCAKES_AND_FLAPJACKS,
	BREADS_AND_ROLLS,
	MEAT_DISHES,
	MEATLESS_DISHES,
	FISH_DISHES,
	SWEET_DISHES,
	SOUPS,
	SALADS_AND_SLAWS,
	SAUCES_AND_PASTES,
	SNACKS,
	PRESERVES,
	DRINKS_AND_COCKTAILS,
	SPIRITS_AND_LIQUEURS,
	HOMEMADE_ICE_CREAM */
