import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Project extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Project.init(
    {
      projectId: {
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
      modelName: 'project',
      sequelize: db,
    },
  );