import { Header } from "../header";
import { LeftPanel } from "./left-panel";

export const Editor = () => {
  return (
    <section class="fixed top-0 left-0 w-screen min-h-screen overflow-hidden bg-white">
      <nav class="w-[56px] h-screen fixed top-0 left-0 overflow-hidden bg-background border-r border-border"></nav>
      <section class="w-full pl-[56px]">
        <Header />
        <div class="flex">
          <LeftPanel class="flex-shrink-0" />
        </div>
      </section>
    </section>
  );
};
