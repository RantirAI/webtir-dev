"use client";
import { Reka } from "@rekajs/core";
import * as React from "react";
import { BlockTools } from "@/components/block-tools";
import { RekaProvider } from "@rekajs/react";
import * as t from "@rekajs/types";
import { Renderer } from "@/components/render-view";
import { ComponentList } from "@/components/component-list";

export default function Editor() {
  const reka = Reka.create();
  /**
   * Apparently we can't move state to a different file.
   * It throws an error but to move the project forwards
   * I have decided to keep it here for a while...
   */
  const state = t.state({
    program: t.program(),
  });
  reka.load(state);

  return (
    <RekaProvider reka={reka}>
      <BlockTools />
      <ComponentList></ComponentList>
    </RekaProvider>
  );
}
