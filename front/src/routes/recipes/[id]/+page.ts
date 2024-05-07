import { error, type Load } from '@sveltejs/kit';
import {compile} from 'mdsvex';

export const load: Load = async ({ params, fetch }) => {
  try{
    const res = await fetch(`/blob/recipe/${params.id}`);
    const recipe = await compile((await res.json()).recipe, {
      extensions: ['.md']
    });    
    // console.log({
    //     content: project.default,
    //     meta: project.metadata,
    //     id: params.id
    // })
    return {
        content: recipe,
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