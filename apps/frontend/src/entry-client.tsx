// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { enableMobXWithSolidJS } from "./lib/enable-mobx";

enableMobXWithSolidJS();
mount(() => <StartClient />, document.getElementById("app")!);
