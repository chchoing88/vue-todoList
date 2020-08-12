/* eslint-disable no-unused-vars */
export default (el, binding, vnode) => {
  console.log("flex shorthand");

  const flexDirection = binding.arg || "row";
  const [alignItems, justifyContent] = binding.value.split(" ");

  el.style.display = "flex";
  el.style.flexDirection = flexDirection;
  el.style.alignItems = alignItems;
  el.style.justifyContent = justifyContent;
};
// export default {
//   bind: (el, binding, vnode) => {
//     console.log("flex bind");

//     const flexDirection = binding.arg || "row";
//     const [alignItems, justifyContent] = binding.value.split(" ");

//     el.style.display = "flex";
//     el.style.flexDirection = flexDirection;
//     el.style.alignItems = alignItems;
//     el.style.justifyContent = justifyContent;
//   },
//   inserted: (el, binding, vnode) => {
//     console.log("flex inserted");
//   },
//   update: (el, binding, vnode, oldVnode) => {
//     console.log("flex update");
//   },
//   componentUpdated: (el, binding, vnode, oldVnode) => {
//     console.log("flex, componentUpdated");
//   },
//   unbind: (el, binding, vnode) => {
//     console.log("flex, unbind");
//   },
// };
