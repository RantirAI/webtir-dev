"use client";

import { useReka } from "@rekajs/react";
import { Type } from "@rekajs/types";
import { useEffect, useState } from "react";
/**
 * 
 * Temporary solution need to remove this when we
 * have a better understanding of the libraries.
 */
export const ComponentList = () => {
  const { reka } = useReka();
  const [component, setComponent] = useState<Type[]>([]);
  reka.listenToChangeset(({ added }) => {
    setComponent([...component, ...added]);
  });
  const compontents = reka.state.program.components.map((c) => c.name);
  return (
    <div className="mt-5 bg-white rounded-md text-sm font-medium p-4 text-esm max-w-[239px]">
      <h3 className=" mb-4">Components</h3>
      <div className="space-y-2">
        {compontents.map((i) => {
          return <p>{i}</p>;
        })}
      </div>
    </div>
  );
};
