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

## 架构

router - 负责对外提供 API 的定义，整合下面的 api 和 middleware 层；

api - 定义 API，过滤无效数据，在一定程度上这就是一份文档；

middleware - 中间件，主要是权限校验(暂时未启用)；

proxy - 代理层，负责校验(重点是数据的有效性)，组合不同的 model 向上层输出，同时为以后数据存储方式的变更留下扩展点；

models - 数据实体的定义，和数据库的交互也在此定义。

权限的校验规则在 router 中配置，包括登录权限和操作权限；校验规则在 middleware 中定义。

## API

**API 采用 RESTful 形式设计**

接口 API：

> URL: /api/users
> 
> Method: GET
> 
> 说明: 获取用户列表

入参：无

返回结果:

```json
{
"status": 0,
"statusInfo": "",
"data": [{
    "_id": "5b325144959843cf5420577b",
    "name": "张三",
    "createDate": "1530773195050",
    "updateDate": "1530773195050"
    }]
}`
```

> URL: /api/users/:id
> 
> Method: DELETE
> 
>  说明: 删除某个用户

入参：无

返回结果:

```json
{
    "status": 0,
    "statusInfo": "",
    "data": {
        "n":1,
        "ok":1
    }
}
```

> URL: /api/users
> 
> Method: POST
> 
>  说明: 添加个用户

入参：

```json
{
    "name": "赵六"
}
```

返回结果:

```json
{
    "status": 0,
    "statusInfo": "",
    "data": {
        "_id": "5b5e75113732983b990aafe9",
        "name": "赵六",
        "createDate": "1532917009489",
        "updateDate": "1532917009489"
    }
}
```

> URL: /api/upload
> 
> Method: POST
> 
> 说明: 上传文件，通过表单的形式提交文件流
> 
> 演示地址: http://127.0.0.1:9090/upload

入参: 文件表单

返回结果:

```json
{
    "status": 0,
    "statusInfo": "上传成功",
    "data": {}
}
```
