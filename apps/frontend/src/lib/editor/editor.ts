import { Reka, Frame } from "@rekajs/core";
import * as t from "@rekajs/types";
import { makeAutoObservable } from "mobx";

export class Editor {
  declare reka: Reka;
  declare frame: Frame;
  declare frameId: string;
  declare activeNode: any;

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

  get root() {
    const root = this.getComponentsByName("App");

    if (!root) {
      throw new Error("No root was found.");
    }

    return root;
  }

  setActiveNode(id: string) {
    const node = this.reka.getNodeFromId(id);
    this.activeNode = node;
  }

  /**
   * Adds header to the selected component.
   */
  addHeader() {
    if (!this.activeNode) {
      return;
    }

    if (t.is(this.activeNode, t.SlottableTemplate)) {
      console.log("text" in this.activeNode.props);
      this.reka.change(() => {
        (this.activeNode as t.SlottableTemplate).props.text = t.literal({
          value: "Header 812",
        });
      });
    } else {
      console.log("nope");
    }
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
                  value:
                    "w-full min-h-[50vh] bg-white flex items-center justify-center",
                }),
              },
              children: [
                t.tagTemplate({
                  tag: "h1",
                  props: {
                    class: t.literal({ value: "text-5xl" }),
                  },
                  children: [
                    t.tagTemplate({
                      tag: "text",
                      props: {
                        value: t.identifier({ name: "text" }),
                      },
                    }),
                  ],
                }),
              ],
            }),
            state: [],
            props: [
              t.componentProp({
                name: "text",
                init: t.literal({ value: "" }),
              }),
            ],
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
