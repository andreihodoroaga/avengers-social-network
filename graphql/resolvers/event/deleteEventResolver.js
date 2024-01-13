const db = require("../../../models");

const deleteEventResolver = async (_, { id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }
  const targetEvent = await db.Event.findByPk(id);

  if (!targetEvent) {
    return null;
  }

  if (user.id !== targetEvent.event_organiser_user_id) {
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
