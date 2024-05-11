package app.recipe.backend.service;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.recipe.backend.model.Category;
import app.recipe.backend.repository.CategoryRepository;
import app.recipe.backend.service.interfaces.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category add(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(UUID id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public Category update(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category delete(UUID id) {
        Category category = findById(id);
        if (category != null) {
            categoryRepository.deleteById(id);
            return category;
        } else {
            throw new IllegalArgumentException("Category not found");
        }
    }
}
