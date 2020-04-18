const mysql = require('mysql')
// 数据库配置
const config = {
  port: 5000,
  database: {
    DATABASE: 'speciallyEffect', // 数据库
    USERNAME: 'sherry', // 用户
    PASSWORD: '123456', // 密码
    PORT: '3306', // 端口
    HOST: 'localhost' // 服务ip地址
  }
}

module.exports = config
