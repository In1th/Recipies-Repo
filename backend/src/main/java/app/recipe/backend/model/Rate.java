package app.recipe.backend.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "rates")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rate {
	@Id
	@GeneratedValue
	@Column(unique = true, nullable = false, updatable = false)
    private UUID id;
    @Column(nullable = false, updatable = false)
    private UUID idRecipe;
    @Column(nullable = false)
    private float rate;
}
