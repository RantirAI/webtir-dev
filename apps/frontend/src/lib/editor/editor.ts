import { Reka, Frame } from "@rekajs/core";
import * as t from "@rekajs/types";
import { makeAutoObservable } from "mobx";

export class Editor {
  declare reka: Reka;
  declare frame: Frame;
  declare frameId: string;

  constructor() {
    this.reka = Reka.create();
    this.frameId = `first-app-0`;
    this.reka.load(this.init());
    this.frame = this.reka.createFrame({
      id: this.frameId,
      component: {
        name: "App",
        external: undefined,
        props: undefined,
      },
    });
    makeAutoObservable(this);
  }

  addContainer = () => {
    const appComponent = this.getComponentsByName("App");
    if (!appComponent) {
      return;
    }
    this.reka.change(() => {
      //@ts-ignore
      return appComponent.template.children.push(
        t.componentTemplate({ component: t.identifier({ name: "Container" }) })
      );
    });
  };

  getComponentsByName(name: string): t.RekaComponent | undefined {
    return this.reka.program.components.find((i) => i.name === name);
  }

  private init() {
    return t.state({
      program: t.program({
        components: [
          t.rekaComponent({
            name: "Container",
            template: t.tagTemplate({
              tag: "section",
              props: {
                class: t.literal({
                  value: "w-full min-h-[50vh] bg-white",
                }),
              },
            }),
            state: [],
            props: [],
          }),
          t.rekaComponent({
            name: "App",
            state: [],
            props: [],
            template: t.tagTemplate({
              tag: "main",
            }),
          }),
        ],
      }),
    });
  }
}
export const editor = new Editor();
