const db = require("../../../models");

const getEventResolver = async (_, { event_id }, user) => {
    if (!user) {
        throw new Error("Unauthorized");
    }
    
    const targetEvent = await db.Event.findByPk(event_id, {
        include: [ {
            model: db.User,
            as: "event_participants",
            attributes: ["user_id"],
        }],
    });

    if (!targetEvent) {
        throw new Error("Event not found");
    }

    const mappedEvent = {
        ...targetEvent.dataValues,
        event_participants: targetEvent.event_participants.map(participant => participant.user_id),
    };

    return mappedEvent;
};

module.exports = getEventResolver;
