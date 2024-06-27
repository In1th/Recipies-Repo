package app.recipe.backend.service.interfaces;

import java.util.List;
import java.util.UUID;

import app.recipe.backend.model.Comment;

public interface CommentService extends BaseService<Comment> { 
    List<Comment> findByRecipe(final UUID id);
}
