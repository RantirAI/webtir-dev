import { addContainer, addLink, addTextToTheFirstContainer } from "@/lib/editor";

export const LeftPanel = (param: { class?: string }) => {
  return (
    <div
      class={`${
        param.class ?? ""
      } w-[319px] h-screen overflow-hidden bg-white border-r flex gap-5 flex-col p-5`}
    >
      <button onClick={addTextToTheFirstContainer}>Text</button>
      <button onClick={addContainer}>Container</button>
      <button onClick={addLink}>Link</button>
    </div>
  );
};
