import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../signin/$types";

export const load: PageServerLoad = async () => {
    throw redirect(303, './');
};