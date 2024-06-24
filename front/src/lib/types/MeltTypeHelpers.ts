import type { createDialog } from "@melt-ui/svelte";

export type DialogTriggerType = ReturnType<typeof dialogMock>;
export type DialogType = ReturnType<typeof createDialog>;
const dialogMock = (props: ReturnType<typeof createDialog>) => props.elements.trigger;