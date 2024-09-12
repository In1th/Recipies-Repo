import type { Tag } from '$lib/models';
import { writable } from 'svelte/store';

export const tagsStore = writable<Tag[]>([]);