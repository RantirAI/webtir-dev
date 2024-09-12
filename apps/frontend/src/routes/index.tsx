import { EditorView } from "~/components/editor";
import { Header } from "~/components/header";
import { Sidebar } from "~/components/side-bar";
import { Reka } from "@rekajs/core";
import { RekaContext } from "~/lib/reka-solidjs";
import * as t from "@rekajs/types";
import { children } from "solid-js/types/server/reactive.js";
export default function Editor() {
  const reka = Reka.create();
  reka.load(
    t.state({
      program: t.program({
        components: [
          t.rekaComponent({
            name: "App",
            state: [],
            props: [],
            template: t.tagTemplate({
              tag: "div",
              props: {
                class: t.literal({ value: "w-[500px]" }),
              },
            }),
          }),
        ],
      }),
    })
  );
  return (
    <div class="min-h-screen">
      <RekaContext.Provider value={reka}>
        <Header />
        <div class="flex">
          <Sidebar />
          <EditorView />
        </div>
      </RekaContext.Provider>
    </div>
  );
}
