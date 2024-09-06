"use client";
import { MIN_DESKTOP_WIDTH } from "@/constants/screen";
import { Reka } from "@rekajs/core";
import * as React from "react";
import { SmallerScreenSizeWarning } from "../warning-screens";
import { Spinner } from "../spinner/spinner";

export default function Editor() {
  const reka = Reka.create();

  if (window.innerWidth < MIN_DESKTOP_WIDTH) {
    return <SmallerScreenSizeWarning />;
  }

  if (!reka.loaded) {
    return (
      <div className="flex items-center justify-center bg-black w-screen h-screen">
        <div className="flex items-center justify-center gap-3">
          <Spinner /> <span className="text-white text-lg">Loading..</span>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      initial stuffP
    </div>
  );
}
