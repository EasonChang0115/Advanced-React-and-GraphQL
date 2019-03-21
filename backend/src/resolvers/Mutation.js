const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are loggef in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the udates
    const updates = {...args};
    // remove the ID from updates
    delete updates.id;
    // run update method
    return ctx.db.mutation.updateItem({
      data: updates,
      where : {
        id: args.id
      },
    }, info);
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.item({ where }, `{
      id title }`);
    // 2. Check if they own that item, on have the permissioins
    // 3. Delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    //  create the user in the database
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permission: { set: ['USER'] }
      }
    }, info);
    // create the JWT for them
    const token = jwt.sign({ userId: user.Id }, process.env.APP_SECRET);
    // we set the jwt as a cookie on the reponse
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 20 * 365 // 1 year cookie
    });
    // finally we return the user to the brower
    return user;
  }
};

module.exports = Mutations;
