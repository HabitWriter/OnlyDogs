import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
        },

    },
    {
      modelName: 'user',
      sequelize: db,
    },
  );