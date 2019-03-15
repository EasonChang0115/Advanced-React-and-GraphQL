// This file connects to the remote prisma DB and gives us the ablility to query with JS
const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: './generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret:　process.env.PRISMA_SECRET,
  debug: false // 若開啟 會在每次發出請求時 console出來內容
});

module.exports = db;