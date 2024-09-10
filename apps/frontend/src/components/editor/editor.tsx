import { createEffect, createSignal, onMount } from "solid-js";
import { useReka, useRekaState } from "~/lib/reka-solidjs";
import * as t from "@rekajs/types";
import { Dynamic } from "solid-js/web";

export const RenderState = ({ view }: { view: t.View }) => {
  if (view instanceof t.TagView) {
    if (view.tag == "text") {
      return <span>{view.props.value}</span>;
    }
    return (
      <Dynamic
        component={view.tag}
        {...view.props}
        children={view.children.map((i) => (
          <RenderState view={i} />
        ))}
      />
    );
  }

  if (view instanceof t.RekaComponentView) {
    return view.render.map((r) => <RenderState view={r} />);
  }

  if (
    view instanceof t.SlotView ||
    view instanceof t.FragmentView ||
    view instanceof t.FrameView
  ) {
    return view.children.map((r) => <RenderState view={r} />);
  }
  return null;
};

export const EditorView = () => {
  const reka = useReka();
  const [show, setShow] = createSignal(false);

  const frame = reka.createFrame({
    id: "first-app",
    component: {
      name: "App",
      external: undefined,
      props: undefined,
    },
  });
  onMount(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key == "d") {
        console.log("pressing..");
        setShow(false);
        setTimeout(() => setShow(true), 20);
      }
    });
  });

  return (
    <div class="w-full p-5">
      <p>Please press d to update the editor.</p>
      {show() && (
        <div class="w-fit mx-auto">
          <RenderState view={frame.view} />
        </div>
      )}
    </div>
  );
};
