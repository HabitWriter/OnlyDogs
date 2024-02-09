import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Subtopic extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Subtopic.init(
    {
      subtopicId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        timeAccessed: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      codeExample: {
        type: DataTypes.TEXT,
      },
      notes: {
        type: DataTypes.TEXT,
      },
    },
    {
      modelName: 'subtopic',
      sequelize: db,
    },
  );