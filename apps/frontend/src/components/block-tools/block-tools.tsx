import { useReka } from "~/lib/reka-solidjs";
import { BoxIcon } from "~/resources";
import * as t from "@rekajs/types"

export default function BlockTools() {
    const reka = useReka();

    const addContainer = () => {
        const appComponent = reka.program.components[0];
        reka.change(() => {
            //@ts-ignore
            return appComponent.template.children.push(
                t.tagTemplate({
                    tag: "div",
                    props: {
                        class: t.literal({
                            value: "w-full min-h-[200px] bg-red-300 border-b border-white",
                        }),
                    },
                })
            );
        });
    };
    return (
        <div class="p-2">
            <h1>Block Tools</h1>
            <button onclick={addContainer}  class="hover:bg-slate-300 w-14 h-14 rounded-sm shadow-md flex items-center flex-col p-2 justify-between outline-none">
                <BoxIcon></BoxIcon>
                <span class="text-xs">Container</span>
            </button>
        </div>
    )

}