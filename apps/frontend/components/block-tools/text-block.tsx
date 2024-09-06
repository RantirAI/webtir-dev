"use client";
import { useReka } from "@rekajs/react";
import * as t from "@rekajs/types";
import { Parser } from "@rekajs/parser";

import { TbTextSize } from "react-icons/tb";

export const TextBlock = () => {
  const { reka } = useReka();
  const handleOnClick = () => {
    reka.change(() => {
      reka.program.components.push(
        t.rekaComponent({
          name: "Header",
          state: [],
          props: [],
        })
      );
    });
  };
  return (
    <button
      onClick={handleOnClick}
      className="block p-5 border rounded-md hover:bg-slate-400 transition-all hover:text-white"
    >
      <TbTextSize className="text-2xl"></TbTextSize>
    </button>
  );
};
