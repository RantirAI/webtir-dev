import { TextIconContainer } from './text-icon-container';
import { SelectDropdown } from './select-dropdown';
import { Separator } from "@kobalte/core/separator";
import { LogoIcon } from '../../resources';

export const Header = () => {
  return (
    <div class="px-2 h-[44px] fixed top-0 left-0 w-full z-10 bg-white flex justify-between items-center shadow">

      {/* first of three parts contains logo and page selct dropdown */}
      <div class="flex items-center gap-2">
        <button>
          {/* logo */}
          <LogoIcon />
        </button>

        {/* select dropdown */}
        <div class="flex items-center gap-2">
          <span>Page</span>
          <SelectDropdown />
        </div>
      </div>

      {/* second of three parts contains site preview and editor width change */}
      <div class="flex gap-2 items-center">
        <span class='cursor-pointer text-sm' onclick={() => { }}>Preview site</span>

        <div class="flex gap-2 items-center">
          <TextIconContainer icon={<div class="border-2 border-black rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-xs size-4 font-bold">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg></div>} onClick={() => { }} text="100%" textStyles='text-xs' />

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[10px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

          <TextIconContainer icon={
            <div class="border-2 border-black rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-xs size-4 font-bold rotate-90">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </div>
          } text="100%" textStyles='text-xs' />
        </div>

        {/* separator */}
        <Separator style="background-color: #E8E7E7;" data-orientation='vertical' class='h-[30px] w-[2px] border-0'></Separator>

        <span class='cursor-pointer text-sm' onclick={() => { }}>Toggle view</span>

        <TextIconContainer icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
        } text='Desktop' />

        {/* redirect/share icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>

      {/* third of three sections
          shows profile info
          might be changed later to show the publish btn 
      */}
      <div class="flex items-center gap-2">
        <div class='rounded-full p-1 bg-blue-900 text-white h-[32px] w-[32px] text-center'>
          TO
        </div>
        <div class='rounded-full p-1 bg-blue-900 text-white h-[32px] w-[32px] text-center'>
          LI
        </div>
      </div>
    </div>
  );
};
