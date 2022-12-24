import type { Directive, DirectiveBinding } from "vue"
// 必须以 vNameOfDirective 的形式来命名本地自定义指令，以使得它们可以直接在模板中使用
/* 

生命周期钩子参数详解
第一个 el  当前绑定的DOM 元素

第二个 binding

instance：使用指令的组件实例。
value：传递给指令的值。例如，在 v-my-directive="1 + 1" 中，该值为 2。
oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 "foo"。
modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}。
dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中

第三个 当前元素的虚拟DOM 也就是Vnode

第四个 prevNode 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用 

*/
const vMoveDirective: Directive = {
  created: () => {
    console.log("初始化====>");
  },
  beforeMount(...args: Array<any>) {
    // 在元素上做些操作
    console.log("初始化一次=======>");
  },
  mounted(el: any, dir: DirectiveBinding) {
    el.style.background = dir.value.background;
    console.log("初始化========>");
  },
  beforeUpdate() {
    console.log("更新之前");
  },
  updated() {
    console.log("更新结束");
  },
  beforeUnmount(...args: Array<any>) {
    console.log(args);
    console.log("======>卸载之前");
  },
  unmounted(...args: Array<any>) {
    console.log(args);
    console.log("======>卸载完成");
  },
};

export default vMoveDirective