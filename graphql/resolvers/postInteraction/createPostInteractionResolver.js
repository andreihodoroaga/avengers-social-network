const db = require("../../../models");

const checkInteractionExists = async (interactionType, postInteraction) => {
    const checkInteracted = await db.UserPostInteraction.findOne({
      where: {
        interaction_type: interactionType,
        user_id: postInteraction.user_id,
        post_id: postInteraction.post_id
      },
    });

    return checkInteracted;
}


const createPostInteractionResolver = async (_, { postInteraction }, user) => {
  const postInteractionType = postInteraction.interaction_type;
  if (!user) {
    throw new Error("Unauthorized");
  }

  postInteraction.user_id = user.user_id;

  if (postInteractionType === "like") {
    const previouslyLiked = await checkInteractionExists(postInteractionType, postInteraction)
    if (previouslyLiked) {
      throw new Error(`Already liked`)
    }
  }
  if (postInteractionType === "bookmark") {
    const previouslyBookmarked = await checkInteractionExists(postInteractionType, postInteraction)
    if (previouslyBookmarked) {
      throw new Error(`Already bookmarked`)
    }
  }
  
  const newPostInteraction = await db.UserPostInteraction.create(postInteraction);

  return newPostInteraction;
};

module.exports = createPostInteractionResolver;
