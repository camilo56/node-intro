const {users, posts} = require("./data");

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = users.find(user => user.id === id)
    cb(user)
  }, 1000)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    cb(posts.filter(post => post.createdBy === userId))
  }, 2000)
}

module.exports = {getUserById, getPostsForUser};
