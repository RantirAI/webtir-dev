import { state } from "@/lib/state";
import { RenderView } from "./render-view";

export const EditorCanvas = () => {
  return (
    <div class="canvas w-full pl-[319px] overflow-y-scroll">
      <div class="p-12 min-h-[300vh] bg-background">
        <RenderView view={state} />
      </div>
    </div>
  );
};
