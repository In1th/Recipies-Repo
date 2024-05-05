package app.recipe.backend.service.interfaces;

import java.util.UUID;
import java.util.List;

public interface BaseService<T> {
    T add(final T object);
	List<T> findAll();
	T findById(final UUID id);
	T update(final T object);
	T delete(final UUID id);
}
