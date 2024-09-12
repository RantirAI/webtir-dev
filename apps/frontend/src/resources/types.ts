import { Accessor } from "solid-js"

export type SidebarIconType = {
    styles?: string,
    activeLink: Accessor<string>
    page: string
}