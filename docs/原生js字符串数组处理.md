<div align="center">
  <h1>原生js字符串数组处理</h1>
  <p>经历过这么就的开发工作，对于这些基础的js调用方法和使用，还是不能够很明确的使用。每次都是一看就会，下次再用就醉,所以这里做了一个文档进行总结处理，一是为了加深印象，二是方便后续开发。</p>
</div>

## 目录

- [目录](#目录)
- [字符串](#字符串)
  - [基本使用](#基本使用)
    - [1.字符串转化为数组形式](#1字符串转化为数组形式)
    - [2.字符串截取](#2字符串截取)
  - [3.字符串拼接](#3字符串拼接)
  - [4.字符串查找下标](#4字符串查找下标)
- [数组](#数组)
- [相关参考](#相关参考)

## 字符串

这里暂时先基于工作开发场景中对 String.prototype 上面的调用函数的使用进行总结，后续遇到会进行补充会进行补充（文档中出现的代码可以使用 chrome 浏览器或者其他浏览器的开发者 console 工具进行案例的处理）

### 基本使用

#### 1.字符串转化为数组形式

一种使用新建 string 类型原型对象上面的`split`函数，另外一种是使用 Array 内置对象下的函数属性`Array.from()`,下面是 demo

```js
let str = "1234567890";
console.log(str.split(""), str);
str.split("", 3); //['1','2','3']
str.split("6"); //['12345','7890']
console.log(Array.from(str), str);
```

> Q:我们要将自己的疑惑尝试可以试着打印出来，有疑惑就去解惑，不要把小问题堆成大问题
>
> A:刚开始对这两个函数操作会不会对原来的字符串是否会造成影响，而感到疑惑，尝试过之后，发现并没有，而是两者的内部处理并没有对原来的数据进行赋值操作，而是 return 了函数处理的返回值。（只要自己想要的问题或者疑惑就去寻找解答，刨根问底的精神）

#### 2.字符串截取

- str.substr(start[, length])
- str.substring(indexStart[, indexEnd])
- str.slice(beginIndex[, endIndex])

**参数解释**

- start
  开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
- [, xxx]
  可以理解为可选
- length 长度
- indexStart 需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母
- indexEnd 一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内
- beginIndex 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的 strLength 是字符串的长度（例如，如果 beginIndex 是 -3 则看作是：strLength - 3）
- endIndex 在该索引（以 0 为基数）处结束提取字符串,可为负

```js
str = "Hello world!";
str.substr(1, 4); //'ello'
str.substring(3); // lo world!
str.substring(3, 7); //lo w
str.slice(1, 4); //'ell'
str.slice(0, -1); //'Hello world'
str.slice(-1, -2); //''
str.slice(-2, -1); //'d'
```

> ECMAScript 不再建议使用 substr,推荐使用 slice() 和 substring() 方法。

### 3.字符串拼接

**concat**

```js
ar a = "hello";
var b = ",world";
var c = a.concat(b); // hello,world
```

### 4.字符串查找下标

- str.indexOf(searchString[, position])
- str.lastIndexOf(searchValue[, fromIndex])

```js
console.log(
  "The index of the first w from the beginning is " + anyString.indexOf("w")
);
// Displays 8
console.log(
  "The index of the first w from the end is " + anyString.lastIndexOf("w")
);
// Displays 10

console.log(
  "The index of 'new' from the beginning is " + anyString.indexOf("new")
);
// Displays 6
console.log(
  "The index of 'new' from the end is " + anyString.lastIndexOf("new")
);
// Displays 6
```

## 数组

## 相关参考

[mdn string](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
[mdn array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
[emoji](https://www.emojiall.com/zh-hans)
