const db = require("../../../models");

const createUserInteractionResolver = async (_, { userInteraction }) => {
  if (userInteraction.user_id_initiator === userInteraction.user_id_recipient) {
    throw new Error(`You cannot ${userInteraction.interaction_type} yourself`);
  }

  const userInteractionType = userInteraction.interaction_type;

  if (userInteractionType === "follow") {
    // check no duplicate follow
    const checkFollow = await db.UserInteraction.findOne({
      where: {
        interaction_type: "follow",
        user_id_initiator: userInteraction.user_id_initiator,
        user_id_recipient: userInteraction.user_id_recipient,
      },
    });

    if (checkFollow) {
      throw new Error("Already following");
    }
  }

  const newUserInteraction = await db.UserInteraction.create({
    ...userInteraction,
    timestamp: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return newUserInteraction;
};

module.exports = createUserInteractionResolver;
