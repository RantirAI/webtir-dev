import { EditorView } from "~/components/editor";
import { Header } from "~/components/header";
import { Sidebar } from "~/components/side-bar";
import { Reka } from "@rekajs/core";
import { RekaContext } from "~/lib/reka-solidjs";
import * as t from "@rekajs/types";
import { ActiveSection } from '../components/active-section/active-section';
import { createSignal } from "solid-js";
export default function App() {
  const [activeLink, setactiveLink] = createSignal("components")

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
        <Sidebar setactiveLink={setactiveLink} activeLink={activeLink} />
        <ActiveSection activeLink={activeLink} />
      </RekaContext.Provider>
    </div>
  );
}
