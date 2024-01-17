const db = require("../../../models");

const withdrawEventResolver = async (_, { id }, user) => {
    const event = await db.Event.findByPk(id);
    const eventParticipant = await db.EventParticipant.findOne({
        where: {
            'event_id': id,
            'participant_id': user.id,
        }
    });

    if (!user) {
        throw new Error("User not found");
    }

    if (!event) {
        throw new Error("Event not found");
    }

    if (!eventParticipant) {
        throw new Error("User is not participating in this event");
    }

    try {
        await eventParticipant.destroy();

        return true;
    } catch (e) {
        throw new Error(e);
    }
};

module.exports = withdrawEventResolver;
