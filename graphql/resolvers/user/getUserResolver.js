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
        ...targetUser.dataValues,
        profile_picture: targetUser.user_image.map(user_image => user_image.profile_picture_path),
    };

    return mappedUser;
};

module.exports = getUserResolver;
