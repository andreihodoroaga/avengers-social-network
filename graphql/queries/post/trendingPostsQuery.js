const { GraphQLList } = require("graphql");
const postType = require("../../types/post/postType");
const db = require("../../../models");
const { Op } = require("sequelize");

const trendingPostsQuery = {
  type: new GraphQLList(postType),
  resolve: async () => {
    try {
      const twentyFourHoursAgo = new Date();
      twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

      const trendingPosts = await db.Post.findAll({
        include: [{
          model: db.UserPostInteraction,
          attributes: [],
          where: {
            createdAt: {
              [Op.gte]: twentyFourHoursAgo,
            },
          },
          required: false,
        }],
        group: ['Post.post_id'],
        attributes: [
          'post_id',
          'user_id',
          'text',
          'timestamp',
          'parent_post_id',
          [db.sequelize.literal('COUNT(post_id)'), 'interactionCount'],
        ],
        order: [
          [db.sequelize.literal('interactionCount'), 'DESC'],
        ],
        limit: 50,
      });

      return trendingPosts;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch trending posts.");
    }
  },
};

module.exports = trendingPostsQuery;
