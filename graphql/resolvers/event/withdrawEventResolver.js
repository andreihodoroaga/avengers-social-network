const db = require("../../../models");

const withdrawEventResolver = async (_, { event_id, participant_id }) => {
    const user = await db.User.findByPk(participant_id);
    const event = await db.Event.findByPk(event_id);
    const eventParticipant = await db.EventParticipant.findOne({
        where: {
            'event_id': event_id,
            'participant_id': participant_id,
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
