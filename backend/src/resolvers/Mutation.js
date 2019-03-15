const Mutations = {
  createDog(parent, args, ctx, info) {
    global.dogs = global.dogs || [];
    let newDog = {name: args.name};
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
