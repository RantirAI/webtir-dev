import { editor } from "@/lib/editor";
import { RenderView } from "./render-view";

export const EditorCanvas = () => {
  return (
    <div class="canvas w-full pl-[319px] overflow-y-scroll">
      <div class="p-12 min-h-[300vh] bg-background">
        <RenderView view={editor.frame.view} />
      </div>
    </div>
  );
};
