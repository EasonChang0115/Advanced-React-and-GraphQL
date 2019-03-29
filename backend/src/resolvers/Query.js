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
