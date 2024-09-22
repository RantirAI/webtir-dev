import { Dynamic } from "solid-js/web";
import * as t from "@rekajs/types";

export const RenderView = ({ view }: { view: t.View }) => {
  console.log("renderring...");
  if (view instanceof t.TagView) {
    if (view.tag == "text") {
      return <>{view.props.value}</>;
    }
    return (
      <Dynamic
        component={view.tag}
        {...view.props}
        children={view.children.map((i) => (
          <RenderView view={i} />
        ))}
      />
    );
  }
  if (view instanceof t.RekaComponentView) {
    return view.render.map((r) => <RenderView view={r} />);
  }

  if (
    view instanceof t.SlotView ||
    view instanceof t.FragmentView ||
    view instanceof t.FrameView
  ) {
    return view.children.map((r) => <RenderView view={r} />);
  }
  return null;
};
