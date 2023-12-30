const db = require("../../../models");

const getUsersResolver = async () => {
    const users = await db.User.findAll({
        include: [ {
            model: db.UserImage,
            as: "user_image",
            attributes: ["profile_picture_path"],
        }],
    });

    const mappedUsers = users.map(user => {
        return {
            ...user.dataValues,
            user_image: user.user_image ? user.user_image.map(user_image => user_image.profile_picture_path) : [],
        };
    });

    return mappedUsers;
};

module.exports = getUsersResolver;
