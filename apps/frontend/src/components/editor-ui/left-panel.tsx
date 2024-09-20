import { addContainer } from "@/lib/editor";

export const LeftPanel = (param: { class?: string }) => {
  return (
    <div
      class={`${
        param.class ?? ""
      } w-[319px] h-screen overflow-hidden bg-white border-r flex gap-5 flex-col p-5`}
    >
      <button>Text</button>
      <button onClick={addContainer}>Container</button>
      <button>Link</button>
    </div>
  );
};
