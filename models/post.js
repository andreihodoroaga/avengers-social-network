"use strict";
const { Model } = require("sequelize");

function countInteractions(userPostInteractions, interactionType) {
  if (userPostInteractions) {
    return userPostInteractions.filter(interaction => interaction.interaction_type === interactionType).length;
  } else {
    return 0;
  }
}

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
      });
      Post.hasMany(models.UserPostInteraction, {
        foreignKey: "post_id",
      });
      Post.belongsTo(models.Post, {
        foreignKey: 'parent_post_id',
        as: 'parentPost',
      });
      Post.hasMany(models.Post, {
        foreignKey: 'parent_post_id',
        as: 'replies',
      });
    }
  }

  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      parent_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.VIRTUAL,
        async get() {
          return await this.getDataValue('createdAt');
        }
      },
      no_likes: {
        type: DataTypes.VIRTUAL,
        async get() {
          const userPostInteractions = await this.getUserPostInteractions();
          return countInteractions(userPostInteractions, 'like');
        }
      },
      no_bookmarks: {
        type: DataTypes.VIRTUAL,
        async get() {
          const userPostInteractions = await this.getUserPostInteractions();
          return countInteractions(userPostInteractions, 'bookmark');
        }
      },
      
      no_reposts: {
        type: DataTypes.VIRTUAL,
        async get() {
          const userPostInteractions = await this.getUserPostInteractions();
          return countInteractions(userPostInteractions, 'repost');
        }
      }
    },
    {
      sequelize,
      modelName: "Post",
    }
  );

  return Post;
};
