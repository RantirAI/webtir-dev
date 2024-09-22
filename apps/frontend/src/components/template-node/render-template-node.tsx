/**
 * Renders the nodes of a temples recursively.
 */
import * as t from "@rekajs/types";

import { editor } from "@/lib/editor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { FaRegularSquare, FaSolidT } from "solid-icons/fa";
import { Icon } from "../block/icon";
import { Match, Switch } from "solid-js";
const getTemplateName = (template: t.Template) => {
  if (template instanceof t.TagTemplate) {
    return template.tag;
  }

  if (template instanceof t.ComponentTemplate) {
    return template.component.name;
  }

  if (template instanceof t.SlotTemplate) {
    return `<slot />`;
  }

  if (template instanceof t.FragmentTemplate) {
    return `<fragment />`;
  }

  throw new Error();
};

export const RenderTemplateNode = (params: { templateId: string }) => {
  const node = editor.reka.getNodeFromId(params.templateId, t.Template);
  if (!node) {
    return;
  }

  const isSlottableTemplate = t.is(node, t.SlottableTemplate);
  const hasChildren = isSlottableTemplate && node.children.length;
  const isSelected = editor.activeNode?.id == params.templateId;
  if (isSlottableTemplate) {
    console.log(node.children);
  }

  return (
    <>
      <Switch>
        <Match when={hasChildren}>
          <AccordionItem value="item-1">
            <AccordionTrigger class="!text-esm font-normal py-2  hover:bg-[#FCFCFC]">
              {getTemplateName(node)}
            </AccordionTrigger>
            <AccordionContent class="">
              {t.is(node, t.SlottableTemplate) &&
                node.children.map((child) => (
                  <RenderTemplateNode templateId={child.id} />
                ))}
            </AccordionContent>
          </AccordionItem>
        </Match>

        <Match when={!hasChildren}>
          <button
            class={`py-2 text-esm text-left ${
              editor.activeNode?.id == params.templateId
                ? "hover:to-blue-100"
                : "hover:bg-[#FCFCFC]"
            } w-full `}
            id={node.id}
            onClick={() => {
              editor.setActiveNode(node.id);
            }}
          >
            {getTemplateName(node)} {isSelected}
          </button>
        </Match>
      </Switch>
    </>
  );
};

export const ComponentTree = (param: { templateId: string }) => {
  return (
    <Accordion collapsible class="w-full">
      <RenderTemplateNode templateId={param.templateId} />
    </Accordion>
  );
};
