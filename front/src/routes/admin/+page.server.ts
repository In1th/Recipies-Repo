import { fail, type Actions } from "@sveltejs/kit"
import type { Load } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData);
        if (
            !(formData.file as File).name ||
            (formData.file as File).name === 'undefined'
        ) {
            return fail(400, {
                error: true,
                message: 'You must provide a file to upload'
            });
        }

        const { file } = formData as { file: File };

        console.log(file);
    }
}

export const load: Load = async ({fetch}) => {
    const res = await fetch('http://backend:8080/api/v0/category')

    console.log(await res.json());
};