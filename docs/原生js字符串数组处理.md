<div align="center">
  <h1>原生js字符串数组处理</h1>
  <p>经历过这么就的开发工作，对于这些基础的js调用方法和使用，还是不能够很明确的使用。每次都是一看就会，下次再用就醉,所以这里做了一个文档进行总结处理，一是为了加深印象，二是方便后续开发。</p>
</div>

## 目录

- [目录](#目录)
- [字符串](#字符串)
  - [基本使用](#基本使用)
    - [1.字符串转化为数组形式](#1字符串转化为数组形式)
- [数组](#数组)
- [相关参考](#相关参考)

## 字符串

这里暂时先基于工作开发场景中对 String.prototype 上面的调用函数的使用进行总结，后续遇到会进行补充会进行补充（文档中出现的代码可以使用 chrome 浏览器或者其他浏览器的开发者 console 工具进行案例的处理）

### 基本使用

#### 1.字符串转化为数组形式

一种使用新建 string 类型原型对象上面的`split`函数，另外一种是使用 Array 内置对象下的函数属性`Array.from()`,下面是 demo

```js
let str = "123";
console.log(str.split(""), str);
console.log(Array.from(str), str);
```

> Q:我们要将自己的疑惑尝试可以试着打印出来，有疑惑就去解惑，不要把小问题堆成大问题
>
> A:刚开始对这两个函数操作会不会对原来的字符串是否会造成影响，而感到疑惑，尝试过之后，发现并没有，而是两者的内部处理并没有对原来的数据进行赋值操作，而是 return 了函数处理的返回值。（只要自己想要的问题或者疑惑就去寻找解答，刨根问底的精神）

## 数组

## 相关参考

[mdn string](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
[mdn array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
