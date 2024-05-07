import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
  try{
    const res = await fetch(`/blob/recipe/${params.id}`);  
    
    const { page, metadata } = await res.json();

    return {
        content: page,
        meta: {
          time: '1h',
          calories: 23,
          title: 'a',
          tags: ['a', 'b', 'c'],
          ingredients: ['a', 'b', 'c']
        },
        id: params.id
    }
  }
  catch (e) {
    console.log(e)
    throw error(404, `Could not not find project`)
  }
}