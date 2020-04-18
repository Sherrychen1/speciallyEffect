const Router = require('koa-router')
const router = new Router()

// 测试
router.get('/test', async ctx => {
  ctx.status = 200
  ctx.body = { msg: 'user works...' }
})

module.exports = router.routes()
