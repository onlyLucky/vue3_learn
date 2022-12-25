<div align="center">
  <h1>vue3 基础语法的使用</h1>
  <p>node v8.12.1  npm </p>
</div>

## 目录

- [目录](#目录)
- [配置](#配置)
  - [1.Vue3 自动引入插件](#1vue3-自动引入插件)
  - [2.vscode 页面编译器配置](#2vscode-页面编译器配置)
  - [3.Vue3 集成 Tailwind CSS](#3vue3-集成-tailwind-css)
- [常见命令添加](#常见命令添加)
  - [npm](#npm)
- [相关参考](#相关参考)

## 配置

### 1.Vue3 自动引入插件

需要安装插件 `unplugin-auto-import`

文件配置如下

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: "src/auto-import.d.ts"
    })
  ],
  ...
})
```

配置完成之后使用 ref reactive watch 等 无须 import 导入 可以直接使用

### 2.vscode 页面编译器配置

[Monaco Editor 快速入门](https://juejin.cn/post/7003722250960502820)

### 3.Vue3 集成 Tailwind CSS

Tailwind CSS 是一个由 js 编写的 CSS 框架 他是基于 postCss 去解析的

postCss 处理 tailWind Css 大致流程

- 将 CSS 解析成抽象语法树(AST 树)
- 读取插件配置，根据配置文件，生成新的抽象语法树
- 将 AST 树”传递”给一系列数据转换操作处理（变量数据循环生成，切套类名循环等）
- 清除一系列操作留下的数据痕迹
- 将处理完毕的 AST 树重新转换成字符串

安装 Tailwind 以及其它依赖项

```shell
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

生成配置文件

```shell
npx tailwindcss init -p
```

配置`tailwind.config.cjs`

```cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

main.ts 引入 css，css 文件如下

````css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
TODO: tailwindcss 学习

## Q&A

### 01.npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree

```shell
npm i --legacy-peer-deps
````

[处理参考](https://www.cnblogs.com/it-people/p/15500753.html)

## 常见命令添加

### npm

- `npm cache clean --force` 清除缓存
- `npm cache verify` 检查缓存
- `--legacy-peer-deps` 忽视 npm 版本安装包

## 相关参考

- [Vue3 hook 库 VueUse](https://vueuse.org/guide/)
- [tailwindcss](https://www.tailwindcss.cn/docs)
