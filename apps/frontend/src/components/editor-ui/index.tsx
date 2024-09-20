import { state } from "@/lib/state";
import { Header } from "../header";
import { LeftPanel } from "./left-panel";
import { EditorCanvas } from "./editor-canvas";

export const Editor = () => {
  return (
    <section class="top-0 left-0 w-screen min-h-screen overflow-hidden bg-white">
      <nav class="w-[56px] h-screen fixed top-0 left-0 overflow-hidden bg-background border-r border-border"></nav>
      <section class="w-full pl-[56px] pt-[61px] ">
        <Header />
        <div class="flex">
          <LeftPanel class="flex-shrink-0 fixed" />
          <EditorCanvas />
        </div>
      </section>
    </section>
  );
};
