import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
  try{
    const res = await fetch(`/blob/recipe/${params.id}`);  
    
    const { page, metadata } = await res.json();
    return {
        content: page,
        meta: metadata,
        id: params.id
    }
  }
  catch (e) {
    throw error(404, `Could not not find project`)
  }
}