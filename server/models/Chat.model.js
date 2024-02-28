import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Chat extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Chat.init(
  { 
    chatId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    modelName: 'chat',
    sequelize: db,
  },
);