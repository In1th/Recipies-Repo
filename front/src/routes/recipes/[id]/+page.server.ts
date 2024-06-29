import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
  try{
    const res = await fetch(`/p6/blob/recipe/${params.id}`);  
    
    const { page, metadata } = await res.json();
    return {
        content: page,
        meta: metadata,
        id: params.id
    }
  }
  catch (e) {
    console.log(e);
    throw error(404, `Could not not find project`)
  }
}