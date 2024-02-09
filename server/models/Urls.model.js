import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Url extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Url.init(
    {
      urlId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    {
      modelName: 'url',
      sequelize: db,
    },
  );