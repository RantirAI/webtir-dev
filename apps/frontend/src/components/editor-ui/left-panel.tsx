export const LeftPanel = (param: { class?: string }) => {
  return (
    <div
      class={`${
        param.class ?? ""
      } w-[319px] h-screen overflow-hidden bg-white border-r`}
    ></div>
  );
};
