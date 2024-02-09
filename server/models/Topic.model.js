import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Topic extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Topic.init(
    {
      topicId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
        },

    },
    {
      modelName: 'topic',
      sequelize: db,
    },
  );