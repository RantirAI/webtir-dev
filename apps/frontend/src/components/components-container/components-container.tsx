import { Accessor } from "solid-js"
import BlockTools from "../block-tools";

export const ComponentsContainerView = ({ activeLink }: { activeLink: Accessor<string> }) => {
    const render = () => {
        switch (activeLink()) {
            case "components":
                return <BlockTools />

            default:
                break;
        }
    }
    return (
        <div class="w-[420px] my-5 rounded-sm bg-white">
            <h1>components section</h1>
            {render()}
        </div>
    )
}