import { JSX } from "solid-js";

export const Icon = (props: { children: JSX.Element }) => {
  return (
    <div class="p-6 text-darkB border aspect-square  rounded-sm flex items-center justify-center flex-col">
      {props.children}
    </div>
  );
};
