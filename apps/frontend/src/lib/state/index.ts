import { Reka } from "@rekajs/core";
import * as t from "@rekajs/types";
import { Reaction } from "mobx";
import { enableExternalSource } from "solid-js";

const enableMobXWithSolidJS = () => {
  let id = 0;
  console.log("Enabled mobx..");
  enableExternalSource((fn, trigger) => {
    const reaction = new Reaction(`externalSource@${++id}`, trigger);
    return {
      track: (x) => {
        let next;
        reaction.track(() => (next = fn(x)));
        return next;
      },
      dispose: () => {
        reaction.dispose();
      },
    };
  });
};

enableMobXWithSolidJS();
export const reka = Reka.create();
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
          }),
        }),
      ],
    }),
  })
);

/**
 * This is the main state of webtir.
 */
export const state = reka.createFrame({
  id: "first-app",
  component: {
    name: "App",
    external: undefined,
    props: undefined,
  },
}).view;
