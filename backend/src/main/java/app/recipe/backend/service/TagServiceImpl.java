package app.recipe.backend.service;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.recipe.backend.model.Tag;
import app.recipe.backend.repository.TagRepository;
import app.recipe.backend.service.interfaces.TagService;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    public Tag add(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public List<Tag> findAll() {
        return tagRepository.findAll();
    }

    @Override
    public Tag findById(UUID id) {
        return tagRepository.findById(id).orElse(null);
    }

    @Override
    public Tag update(Tag tag) {
        return tagRepository.save(tag);
    }

    @Override
    public Tag delete(UUID id) {
        Tag tag = findById(id);
        if (tag != null) {
            tagRepository.deleteById(id);
            return tag;
        } else {
            throw new IllegalArgumentException("Tag not found");
        }
    }
}
