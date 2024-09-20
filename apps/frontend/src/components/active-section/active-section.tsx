import { ComponentsContainerView } from '../components-container';
import { EditingPanelView } from '../editing-panel/editing-panel';
import { Accessor, createSignal } from 'solid-js';
import { string } from '@rekajs/types';
export const ActiveSection = ({ activeLink }: { activeLink: Accessor<string> }) => {
    return (
        <div class="pl-[40px] pt-[44px] h-screen box-border" style="background-color: #F5F5F5;">
            <div class='flex gap-3 h-full pl-5 w-full'>
                <ComponentsContainerView activeLink={activeLink} />
                <EditingPanelView />
            </div>
        </div>
    )
}