<div align="center">
  <h1>vue3 基础语法的使用</h1>
  <p>node v8.12.1  npm </p>
</div>

## 目录

- [目录](#目录)
- [配置](#配置)
  - [1.Vue3 自动引入插件](#1vue3-自动引入插件)
  - [2.vscode 页面编译器配置](#2vscode-页面编译器配置)
- [Q\&A](#qa)
  - [01.npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree](#01npm-版本兼容导致的-npm-err-eresolve-unable-to-resolve-dependency-tree)
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

## Q&A

### 01.npm 版本兼容导致的 npm ERR! ERESOLVE unable to resolve dependency tree

```shell
npm i --legacy-peer-deps
```

[处理参考](https://www.cnblogs.com/it-people/p/15500753.html)

## 常见命令添加

### npm

- `npm cache clean --force` 清除缓存
- `npm cache verify` 检查缓存
- `--legacy-peer-deps` 忽视 npm 版本安装包

## 相关参考

[Vue3 hook 库 VueUse](https://vueuse.org/guide/)
