/*
 * @Author: fg
 * @Date: 2022-12-23 16:29:36
 * @LastEditors: fg
 * @LastEditTime: 2022-12-23 18:29:51
 * @Description: tsx
 */

/**
 * 1.tsx不会自动解包使用ref加.vlaue ! ! !
 * 2.v-model v-show 支持使用
 * 3.v-if 不支持，可以使用三目运算
 * 4.v-for 不支持，可以使用数组便利
 * 5.v-on绑定事件 所有的事件都按照react风格来
 *   - 所有事件有on开头
 *   - 所有事件名称首字母大写
 * 6.v-bind使用，可以直接使用
 *
 *
 *
 *
 */
import { ref } from "vue";
const v = ref<string>("");
let flag = ref(false);
let arr = [1, 2, 3, 4, 5, 6];

type PropsType = {
  title?: string;
};

const renderDom = (props: PropsType, content: any) => {
  return (
    <>
      <h3>v-model</h3>
      <input type="text" v-model={v.value} />
      <div>{v.value}</div>
      <h3>v-show</h3>
      <p>
        <span>当前状态：{`${flag.value}`}</span>
        <span v-show={flag.value}>显示</span>
        <span v-show={!flag.value}>隐藏</span>
        <button onClick={onChange}>change</button>
      </p>
      <h3 data-arr={arr}>v-bind</h3>
      <h3>props</h3>
      <p>{props.title || "nothing"}</p>
      <h3>Emit派发</h3>
      <button onClick={emitTap.bind(this, content)}>点击试一试</button>
      <h3>slot --- TODO time</h3>
    </>
  );
};

const onChange = () => {
  flag.value = !flag.value;
};
const emitTap = (ctx: any) => {
  ctx.emit("on-click", 1);
};

export default renderDom;
