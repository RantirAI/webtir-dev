import { useReka } from "~/lib/reka-solidjs";
import * as t from "@rekajs/types";

export const Sidebar = () => {
  const reka = useReka();

  const addContainer = () => {
    const appComponent = reka.program.components[0];
    reka.change(() => {
      //@ts-ignore
      return appComponent.template.children.push(
        t.tagTemplate({
          tag: "div",
          props: {
            class: t.literal({
              value: "w-full min-h-[200px] bg-red-300 border-b border-white",
            }),
          },
        })
      );
    });
  };
  // setInterval(()=>addContainer(),2000)
  return (
    <div class="w-[19rem] px-5 bg-primary-black h-screen flex-shrink-0">
      <div class="space-y-2">
        <button
          class="block bg-background p-2 rounded w-full text-sm font-bold"
          onClick={addContainer}
        >
          Container
        </button>
        <button class="block bg-background p-2 rounded w-full text-sm font-bold">
          Text
        </button>
      </div>
    </div>
  );
};
