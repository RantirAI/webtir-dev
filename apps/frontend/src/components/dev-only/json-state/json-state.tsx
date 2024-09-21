import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { editor } from "@/lib/editor";
import { prettyPrintJson } from "pretty-print-json";
import { TbTerminal2 } from "solid-icons/tb";

export const JsonState = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger class="text-white">
          <TbTerminal2 class="text-primary-black text-xl" />
        </DialogTrigger>
        <DialogContent class="w-[90vw] h-[90vh] bg-primary-black text-white">
          <DialogHeader>
            <DialogTitle>Reka structure</DialogTitle>
          </DialogHeader>
          <div class="text-sm">
            <pre innerHTML={prettyPrintJson.toHtml(editor.reka.toJSON())}></pre>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
