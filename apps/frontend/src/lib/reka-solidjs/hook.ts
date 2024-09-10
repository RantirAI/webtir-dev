import { createEffect, createSignal, useContext } from "solid-js";
import { RekaContext } from "./provider";
import * as t from "@rekajs/types";

export const useReka = () => {
  const reka = useContext(RekaContext);
  if (!reka) {
    throw new Error("Reka context is invalid.");
  }
  return reka;
};

export const useRekaState = () => {
  const reka = useContext(RekaContext);

  if (!reka) {
    throw new Error("Reka context is invalid.");
  }

  const [rekaState] = createSignal<t.State>(reka.state);

  return rekaState;
};
