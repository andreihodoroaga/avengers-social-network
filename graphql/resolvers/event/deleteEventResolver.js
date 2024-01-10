const db = require("../../../models");

const deleteEventResolver = async (_, { event_id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }
  const targetEvent = await db.Event.findByPk(event_id);

  if (!targetEvent) {
    return null;
  }

  if (user.user_id !== targetEvent.event_organiser_user_id) {
    throw new Error("Unauthorized");
  }

  try {
    await targetEvent.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteEventResolver;
