import { editor } from "@/lib/editor";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "../ui/accordion";
import { Icon } from "./icon";
import { FaRegularSquare, FaSolidT } from "solid-icons/fa";

const Blocks = () => {
  return (
    <Accordion collapsible class="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Blocks</AccordionTrigger>
        <AccordionContent class="flex pb-5 gap-3">
          <button
            class="w-1/3 hover:bg-background transition-all"
            onClick={editor.addContainer}
          >
            <Icon>
              <FaRegularSquare class="text-darkB" />
              <p class="text-esm">Div</p>
            </Icon>
          </button>
          <button
            class="w-1/3 hover:bg-background transition-all"
            onClick={editor.addHeader.bind(editor)}
          >
            <Icon>
              <FaSolidT class="text-darkB" />
              <p class="text-esm">Title</p>
            </Icon>
          </button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Blocks;
