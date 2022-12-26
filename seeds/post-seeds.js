const { Post } = require('../models');

const postdata = [
  {
    title: 'Testing testing title',
    post_text: 'Hi there, this is a test.',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;