import { createToaster } from "@melt-ui/svelte";
import { readable } from "svelte/store";

type ToastData = {
    title: string;
    description: string;
    color: string;
};

const toast = createToaster<ToastData>();

export const toasterStore = readable(toast);

export const addErrorToast = (title: string, description: string) => {
    toast.helpers.addToast({
        data: {title, description, color: 'bg-red-500'}
    })
}

export const addSuccessToast = (title: string, description: string) => {
    toast.helpers.addToast({
        data: {title, description, color: 'bg-green-500'}
    })
}