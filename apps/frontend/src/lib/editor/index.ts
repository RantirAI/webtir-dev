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

export const addTextToTheFirstContainer = () => {
  const appComponent = reka.program.components[0];
  reka.change(() => {
    //@ts-ignore
    return appComponent.template.children.push(
      t.tagTemplate({
        tag: "h1",
        props: {
          class: t.literal({
            value: "w-full text-center bg-white",
          }),
        },
        children: [
          t.tagTemplate({
            tag: "text",
            props: {
              value: t.literal({ value: "Hello world." }),
            },
          }),
        ],
      })
    );
  });
};

export const addLink = () => {
  const appComponent = reka.program.components[0];
  reka.change(() => {
    //@ts-ignore
    return appComponent.template.children.push(
      t.tagTemplate({
        tag: "a",
        props: {
          class: t.literal({
            value: "w-full text-center bg-white",
          }),
          href: t.literal({ value: "https://www.google.com" }),
        },
        children: [
          t.tagTemplate({
            tag: "text",
            props: {
              value: t.literal({ value: "Take me to goog..." }),
            },
          }),
        ],
      })
    );
  });
};
