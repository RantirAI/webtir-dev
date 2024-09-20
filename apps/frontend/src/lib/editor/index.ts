/**
 * A list of function that add state..
 */

import { reka } from "../state";
import * as t from "@rekajs/types";

export const addContainer = () => {
  const appComponent = reka.program.components[0];
  console.log("adding container..");
  reka.change(() => {
    //@ts-ignore
    return appComponent.template.children.push(
      t.tagTemplate({
        tag: "div",
        props: {
          class: t.literal({
            value: "w-full min-h-[50vh] bg-white",
          }),
        },
      })
    );
  });
};
