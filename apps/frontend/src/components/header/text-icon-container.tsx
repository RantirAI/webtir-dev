import { JSX } from "solid-js";

type TextIconContainerProps = {
    icon: JSX.Element;
    text: string;
    onClick?: () => void,
    textStyles?: string
}

export const TextIconContainer = ({ icon, text, onClick, textStyles }: TextIconContainerProps) => {
    return (
        <div class="flex items-center gap-2 p-2 border-2 rounded h-[30px] text-sm" style="border-color: #E8E7E7;" onclick={onClick}>
            <span class={ textStyles }>{text}</span>
            {icon}
        </div>
    )
}