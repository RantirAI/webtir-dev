// export const RenderState = ({ view }: { view: t.View }) => {
//   if (view instanceof t.TagView) {
//     if (view.tag == "text") {
//       return <span>{view.props.value}</span>;
//     }
//     return (
//       <Dynamic
//         component={view.tag}
//         {...view.props}
//         children={view.children.map((i) => (
//           <RenderState view={i} />
//         ))}
//       />
//     );
//   }
//   if (view instanceof t.RekaComponentView) {
//     return view.render.map((r) => <RenderState view={r} />);
//   }

//   if (
//     view instanceof t.SlotView ||
//     view instanceof t.FragmentView ||
//     view instanceof t.FrameView
//   ) {
//     return view.children.map((r) => <RenderState view={r} />);
//   }
//   return null;
// };

