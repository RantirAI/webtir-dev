import { observer } from "@rekajs/react";
import * as t from "@rekajs/types";
import Image from "next/image";
import * as React from "react";

type RendererProps = {
  view: t.View;
};

const InternalRenderer = observer((props: RendererProps) => {
  const view = props.view;

  if (view instanceof t.TagView) {
    return <div>TagView</div>;
  }

  if (view instanceof t.ComponentView) {
    return <div>ComponentView</div>;
  }

  if (view instanceof t.ErrorSystemView) {
    return <div>ErrorSystemView</div>;
  }

  if (view instanceof t.FragmentView || view instanceof t.FrameView) {
    return (
      <React.Fragment>
        {view.children.map((child) => (
          <InternalRenderer key={child.id} view={child} />
        ))}
      </React.Fragment>
    );
  }

  return null;
});

export const Renderer = observer((props: RendererProps) => {
  const view = props.view;
  console.log("rendering...");
  return <InternalRenderer view={view} />;
});
