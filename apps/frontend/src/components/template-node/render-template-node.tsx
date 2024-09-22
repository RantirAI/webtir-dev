/**
 * Renders the nodes of a temples recursively.
 */
import * as t from "@rekajs/types";

import { editor } from "@/lib/editor";
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
  console.log(node);

  return (
    <div>
      <p
        id={node.id}
        onClick={() => {
          editor.setActiveNode(node.id);
          console.log(editor.activeNode);
        }}
      >
        {getTemplateName(node)}
      </p>
      {t.is(node, t.SlottableTemplate) &&
        node.children.map((child) => (
          <RenderTemplateNode templateId={child.id} />
        ))}
    </div>
  );
};
