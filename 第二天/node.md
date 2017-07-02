## node 怎么解决异步问题？
- callback
## node不具有兼容性问题

## 在node中 能用异步绝不用同步



## 模块化
- js中实现模块化，单例，闭包
- 单例 缺点：不能保证一定不冲突，会导致调用过长，require(AMD) ,seajs(CMD),import export,不兼容
- 没有块级作用域


## node 自带模块化 commonjs规范
- 怎么定义一个模块(每一个js都是一个模块，在每个文件外面增加一个闭包)
- 如何导出一个模块 module.exports/exports
- 如何引用一个模块 require();


## 模块分类
- 文件模块
- 第三方模块 别人写的，需要下载 nppm下载模块
    - 全局安装(只能在命令行下使用 会提供给你一个全局命令,代码里不能使用)
        ```
            npm install nrm -g
            nrm test
            nrm use taobao/cnpm
        ```
    - 本地安装(在当前项目下使用)
        自己不能安装自己
        npm init 记录所有依赖的 package.json，可能会导致安装到上级目录，名字不能有中文 不能有大写 不能有特殊字符 快捷一件npm init -y
        - 安装 npm install
        - 开发依赖 只在开发时应用 例如less   --save-dev(-D)
        - 项目依赖 开发上线都需要 例如jquery  --save(-S)
        - 卸载 npm uninstall 模块的名字 --save
        - 查看模块版本 npm info vue
        - 指定版本安装 npm install vue@1.0.0 --save
            ```
                
            ```
- 内置模块、核心模块 node自带的


## yarn 需要npm来下载(主流)
- 安装一次即可
```
npm install yarn -g
```
- 初始化 package.json
```
yarn init -y
```
- 本地安装
    -开发依赖 yarn add less -dev
    -项目依赖 yarn add jquery
- 删除
    - yarn remove less -dev

> npm node package manager 管理node的包 (很多js文件)的，安装node自带npm ，买node送npm