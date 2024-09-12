import { useReka } from "~/lib/reka-solidjs";
import * as t from "@rekajs/types";
import { PlusCircledIcon, DataStackIcon } from '../../resources';
import { PaperStackIcon, GridIcon, SparklesIcon } from '../../resources/icons';
import { Accessor, Setter } from "solid-js";

export const Sidebar = ({ setactiveLink, activeLink } : { setactiveLink: Setter<string>, activeLink: Accessor<string> }) => {
  
  
  return (
    <div class="w-[30px] px-5 bg-white fixed top-0 left-0 pt-[44px] h-screen flex justify-between flex-col">
      <div class="flex flex-col space-y-4 w-full items-center py-2">

        <button onClick={(e) => setactiveLink('components')} class={`${ activeLink() === "components" ? "bg-blue-100 " : "" } p-1 rounded-sm`}>
          <PlusCircledIcon activeLink={activeLink} page="components" />
        </button>

        <button onClick={(e) => setactiveLink('data')} class={`${ activeLink() === "data" ? "bg-blue-100 " : "" } p-1 rounded-sm`}>
          <DataStackIcon activeLink={activeLink} page="data"/>
        </button>

        <button onClick={(e) => setactiveLink('paper')} class={`${ activeLink() === "paper" ? "bg-blue-100 " : "" } p-1 rounded-sm`}>
          <PaperStackIcon activeLink={activeLink} page="paper" />
        </button>

        <button onClick={(e) => setactiveLink("grid")} class={`${ activeLink() === "grid" ? "bg-blue-100 " : "" }p-1 rounded-sm`}>
          <GridIcon activeLink={activeLink} page="grid" />
        </button>

        <button onClick={(e) => setactiveLink("sparkles")} class={`${ activeLink() === "sparkles" ? "bg-blue-100 " : "" } p-1 rounded-sm`}>
          <SparklesIcon activeLink={activeLink} page="sparkles" />
        </button>
      </div>

      <div class="flex flex-col space-y-2 w-full items-center py-2">
        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16.84px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </button>

        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16.84px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </button>

        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-[16.84px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
          </svg>
        </button>
      </div>
    </div>
  );
};
