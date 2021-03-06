const { forwardTo } = require('prisma-binding');

const Query = {
  // 若不需要驗證 , 可以直接使用prisma-binding 提供歷遍db的功能 可以直接取出要的資料
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  // 文章列表
  article: forwardTo('db'),
  articles: forwardTo('db'),
  articlesConnection: forwardTo('db'),
  async pageArticles(parent, args, ctx, info) {
    let nowArticle = await ctx.db.query.article({where: { id: args.id }},
      `{
        id
        title
        content
        image
        createdAt
        author {
          id
          name
        }
      }`
    );
    if (!nowArticle) {
      throw new Error(`No such article found for ID ${args.id}`);
    }
    let nextArticle = await ctx.db.query.articles({ where: {createdAt_gt: nowArticle.createdAt}, first: 1 });
    let prevArticle = await ctx.db.query.articles({ where: {createdAt_lt: nowArticle.createdAt}, last: 1 });
    return {
      preArticle: prevArticle[0],
      nowArticle: nowArticle,
      nextArticle: nextArticle[0],
    }
  },
  // me 需要token 驗證 所以要自己寫query 函式
  me (parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: {
        id: ctx.request.userId
      }
    }, info);
  }
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items');
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
