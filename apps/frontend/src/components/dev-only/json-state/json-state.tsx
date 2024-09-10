import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useRekaState } from "~/lib/reka-solidjs";
import { prettyPrintJson } from "pretty-print-json";
export const JsonState = () => {
  const state = useRekaState();
  return (
    <div>
      <Dialog>
        <DialogTrigger class="text-white">State</DialogTrigger>
        <DialogContent class="w-[90vw] h-[90vh] bg-primary-black text-white">
          <DialogHeader>
            <DialogTitle>Reka structure</DialogTitle>
          </DialogHeader>
          <div class="text-sm">
            <pre innerHTML={prettyPrintJson.toHtml(state())}></pre>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
