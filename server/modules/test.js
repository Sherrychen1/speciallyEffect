// 引入mysql的配置文件
const db = require('../config/db')

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.成功')
  })
  .catch(err => {
    console.error('失败', err)
  })

// 引入sequelize对象
const Sequelize = db.sequelize

// 引入数据表模型  占坑 sequelize更新到6.0会丢弃import方法
const Article = Sequelize.import('../schema/test')

Article.sync({ force: false }) // 自动创建表

class ArticleModel {
  /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
  static async createArticle(data) {
    return await Article.create({
      title: data.title, // 标题
      author: data.author, // 作者
      content: data.content, // 文章内容
      category: data.category // 文章分类
    })
  }

  /**
     * 查询文章的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
  static async getArticleDetail(id) {
    return await Article.findOne({
      where: {
        id
      }
    })
  }
}

module.exports = ArticleModel
