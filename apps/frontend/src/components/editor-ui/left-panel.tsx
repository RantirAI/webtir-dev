import { editor } from "@/lib/editor";
import { ComponentTree, RenderTemplateNode } from "../template-node";
import { Show } from "solid-js";
import Blocks from "../block/accordion";

export const LeftPanel = (param: { class?: string }) => {
  const rootTemplateId = editor.root.template?.id;
  return (
    <div
      class={`${
        param.class ?? ""
      } w-[319px] h-screen overflow-hidden bg-white border-r flex gap-5 flex-col p-5`}
    >
      <Blocks />

      <Show when={rootTemplateId}>
        <ComponentTree templateId={rootTemplateId!} />
      </Show>
    </div>
  );
};
