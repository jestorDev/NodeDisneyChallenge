
import { Model, DataTypes } from "sequelize";

export default (sequelize)=>{
    class User extends Model {}
    User.init({
      ID: {
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
        type: DataTypes.STRING(200)
    },
      email: {
        type: DataTypes.STRING(200)  
      },
      password: {
          type: DataTypes.STRING(60)  
      },
  
  }, {
      sequelize,
      modelName: 'User',freezeTableName: true,
    });
    return User;
};