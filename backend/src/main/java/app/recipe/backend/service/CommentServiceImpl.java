package app.recipe.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.recipe.backend.model.Comment;
import app.recipe.backend.repository.CommentRepository;
import app.recipe.backend.service.interfaces.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Comment add(Comment comment) {
        return commentRepository.save(comment);
    }

    @Override
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Override
    public Comment findById(UUID id) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        return optionalComment.orElse(null);
    }

    @Override
    public Comment update(Comment comment) {
        if (commentRepository.existsById(comment.getId())) {
            return commentRepository.save(comment);
        } else {
            throw new IllegalArgumentException("Comment not found");
        }
    }

    @Override
    public Comment delete(UUID id) {
        Optional<Comment> optionalComment = commentRepository.findById(id);
        if (optionalComment.isPresent()) {
            Comment comment = optionalComment.get();
            commentRepository.deleteById(id);
            return comment;
        } else {
            throw new IllegalArgumentException("Comment not found");
        }
    }

    @Override
    public List<Comment> findByRecipe(UUID recipeId) {
        List<Comment> comments = commentRepository.findByIdRecipe(recipeId);
        if (comments.isEmpty()) {
            throw new IllegalArgumentException("No comments found for the given recipe");
        }
        return comments;
    }
}
