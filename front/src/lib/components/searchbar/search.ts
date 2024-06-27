import { writable } from "svelte/store";
import type { Recipe } from "$lib/models/RecipeDto";

export interface SearchRecipe extends Recipe {
    searchTerms: string;
}

export interface SearchStore {
    data: SearchRecipe[];
    filtered: SearchRecipe[];
    search: string;
}

export const createSearchStore = (data: SearchRecipe[]) => {
    const { subscribe, set, update } = writable<SearchStore>({
        data: data,
        filtered: data,
        search: "",
    });

    return {
        subscribe,
        set,
        update,
        setSearch: (search: string) => update(store => {
            store.search = search;
            store.filtered = store.data.filter(item => {
                const searchTerms = item.searchTerms || "";
                return searchTerms.toLowerCase().includes(search.toLowerCase());
            });
            return store;
        })
    };
};

export const searchHandler = (store: SearchStore, search: string) => {
    store.search = search;
    store.filtered = store.data.filter(item => {
        const searchTerms = item.searchTerms || "";
        return searchTerms.toLowerCase().includes(search.toLowerCase());
    });
};

export const searchTermsRecipe = (data: Recipe[]): SearchRecipe[] => {
    return data.map((recipe) => {
        const searchTerms = `${recipe.title} ${recipe.tags.map(tag => tag.name).join(' ')}`;
        return {
            ...recipe,
            searchTerms
        };
    });
};

export const searchStore = createSearchStore([]);