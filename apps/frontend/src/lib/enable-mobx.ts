import { enableExternalSource } from "solid-js";
import { Reaction } from "mobx";

/**
 * This is not needed in order for mobx to work
 * properly with solidjs.
 */
export const enableMobXWithSolidJS = () => {
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
