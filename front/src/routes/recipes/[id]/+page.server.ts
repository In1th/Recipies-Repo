import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
  try{
    const res = await fetch(`/blob/recipe/${params.id}`);  
    
    const { page, metadata } = await res.json();
    console.log(metadata)
    return {
        content: page,
        meta: metadata,
        id: params.id
    }
  }
  catch (e) {
    console.log(e)
    throw error(404, `Could not not find project`)
  }
}