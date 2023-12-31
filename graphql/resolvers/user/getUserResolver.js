const db = require("../../../models");

const getUserResolver = async (_, { user_id }) => {
    const targetUser = await db.Event.findByPk(user_id, {
        include: [ {
            model: db.UserImage,
            as: "user_image",
            attributes: ["profile_picture_path"],
        }],
    });

    if (!targetUser) {
        throw new Error("User not found");
    }

    const mappedUser = {
        ...targetUser.dataValues
    };

    targetUser.dataValues.profile_picture = targetUser.user_image ? targetUser.user_image.dataValues.profile_picture_path : null;

    return mappedUser;
};

module.exports = getUserResolver;
