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
    messages: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
    memberIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
  },
  {
    modelName: 'chat',
    sequelize: db,
  },
);