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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profilePic: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    friendsList: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    breed: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'user',
    tableName: 'users',
    sequelize: db,
  },
);
db.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

