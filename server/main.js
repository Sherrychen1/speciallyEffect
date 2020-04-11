// 这是入口文件

// 引入模块
const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql')

// 实例化 koa
const main = new Koa()
const router = new Router()

// 路由
router.get('/', async ctx => {
  ctx.body = { msg: 'hello koa interfaces,你好，宋' }
})

// 连接数据库  数据库为MySQL5.7.26
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'sherry',
  password: '123456',
  database: 'speciallyEffect'
})

connection.connect()

connection.query('SELECT  * from test', function (error, results, fields) {
  if (error) {
    console.log('错了The solution is: ', error)
  } else {
    console.log(results, fields)
  }
})
// 配置路由

main.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5000
// 监听端口
main.listen(port, () => {
  console.log(`server started on${port}!`)
})
