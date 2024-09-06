"use client";
import { MIN_DESKTOP_WIDTH } from "@/constants/screen";
import { Reka } from "@rekajs/core";
import * as React from "react";
import { SmallerScreenSizeWarning } from "../warning-screens";

export default function Editor() {
  const reka = Reka.create();

  if (window.innerWidth < MIN_DESKTOP_WIDTH) {
    return <SmallerScreenSizeWarning />;
  }

  return <div>Initial stuff</div>;
}
