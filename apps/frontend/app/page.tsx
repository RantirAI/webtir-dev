"use client";

import { useRouter } from "next/navigation";
import { Reka } from "@rekajs/core";
import * as React from "react";
import { BlockTools } from "@/components/block-tools";

export default function Editor() {
  const router = useRouter();
  return (
    <div>
      <BlockTools />{" "}
    </div>
  );
}
