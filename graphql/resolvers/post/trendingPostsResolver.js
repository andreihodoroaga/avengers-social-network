const db = require("../../../models");

const trendingsPostsResolver = async (_a, _b, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  try {
    const twentyFourHoursAgo = new Date(); 
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    const trendingPostIdsAndCount = await db.sequelize.query(
      `
      SELECT 
        Post.post_id,
        IFNULL(COUNT(UserPostInteractions.post_id), 0) AS interaction_count
      FROM 
        Posts AS Post
      LEFT JOIN 
        UserPostInteractions ON Post.post_id = UserPostInteractions.post_id AND UserPostInteractions.createdAt >= :twentyFourHoursAgo
      GROUP BY 
        Post.post_id, Post.user_id, Post.parent_post_id, Post.text, Post.createdAt
      ORDER BY 
        interaction_count DESC
      LIMIT 50
      `,
      {
        type: db.sequelize.QueryTypes.SELECT,
        replacements: {
          twentyFourHoursAgo: twentyFourHoursAgo.toISOString(),
        },
      }
    );

    const trendingPosts = await Promise.all(trendingPostIdsAndCount.map(async ({ post_id }) => {
      return await db.Post.findByPk(post_id)
    }))

    return trendingPosts;
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    throw error;
  }
}

module.exports = trendingsPostsResolver;
