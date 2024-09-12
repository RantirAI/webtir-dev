import { JsonState } from "../dev-only/json-state";

export const Header = () => {
  return (
    <div class="px-10 min-h-14 bg-primary-black ">
      <div class="py-3 ml-auto w-fit">
        <JsonState />
      </div>
    </div>
  );
};
