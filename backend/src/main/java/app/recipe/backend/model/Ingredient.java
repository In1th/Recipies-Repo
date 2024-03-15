package app.recipe.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "ingredients")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ingredient {
	@Id
	@GeneratedValue
	@Column(unique = true, nullable = false, updatable = false)
	private UUID uuid;
	private String name;
}
