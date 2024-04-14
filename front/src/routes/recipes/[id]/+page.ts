import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try{
    const project = await import(`../../../resources/${params.id}.md`);
    // console.log({
    //     content: project.default,
    //     meta: project.metadata,
    //     id: params.id
    // })
    return {
        content: project.default,
        meta: project.metadata,
        id: params.id
    }
  }
  catch (e) {
    console.log(e)
    throw error(404, `Could not not find project`)
  }
}