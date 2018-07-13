# 服务端渲染全栈项目模板

> 服务端 NodeJs + Koa + Mongo + Redis，浏览器端 Vue + axios + ElementUI，还有 Nuxt 方案来做 SSR。

## 项目初始化

*不保证 Windows 系统的兼容性*

1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `npm install` 安装依赖包
4. `npm run dev`
5. visit `http://localhost:9090`
6. done!

MongoDB 数据库名 test。

MongoDB 附注：
- 在根目录下新建 data/db: `sudo mkdir -p /data/db`;
- 然后把 MongoDB 的包放到 /usr/local 下，当前项目用的是 mongodb-osx-x86_64-enterprise-3.6.0 这一版；
- 启动 MongoDB: sudo /usr/local/mongodb-osx-x86_64-enterprise-3.6.0/bin/mongod

## 部署

```shell
# 构建
npm run build
# 启动服务和进程守护
npm run pm2
```

## 使用方法

待续...

## 架构

router - 负责对外提供 API 的定义，整合下面的 api 和 middleware 层；

api - 定义 API，过滤无效数据，在一定程度上这就是一份文档；

middleware - 中间件，主要是权限校验(暂时未启用)；

proxy - 代理层，负责校验(重点是数据的有效性)，组合不同的 model 向上层输出，同时为以后数据存储方式的变更留下扩展点；

models - 数据实体的定义，和数据库的交互也在此定义。

权限的校验规则在 router 中配置，包括登录权限和操作权限；校验规则在 middleware 中定义。

## API

> API 采用 RESTful 形式设计。

实例：

- source: 一个人上传的一个站点的全部文件，不同人上传的同一站点算作两个资源；
