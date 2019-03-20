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
  }
};

module.exports = Mutations;
