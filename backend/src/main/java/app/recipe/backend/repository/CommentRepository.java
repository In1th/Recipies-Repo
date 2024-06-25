package app.recipe.backend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.recipe.backend.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, UUID> { 
    public List<Comment> findByIdRecipe(UUID idRecipe);
}
