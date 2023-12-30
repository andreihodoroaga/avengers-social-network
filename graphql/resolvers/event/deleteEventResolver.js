const db = require("../../../models");

const deleteEventResolver = async (_, { event_id }) => {
  const targetEvent = await db.Event.findByPk(event_id);

  if (!targetEvent) {
    return null;
  }

  try {
    await targetEvent.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteEventResolver;
