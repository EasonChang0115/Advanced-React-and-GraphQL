const { forwardTo } = require('prisma-binding');
const Query = {
  // 若不需要驗證 prisma-binding 提供歷遍db的功能 可以直接取出要的資料
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items');
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
