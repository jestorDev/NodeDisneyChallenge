
import { Model, DataTypes } from "sequelize";


export default (sequelize)=>{
    class Character extends Model {}
    Character.init({
      ID: {
          type: DataTypes.BIGINT,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
  
      },
      name: {
          type: DataTypes.STRING(200)
      },
      image: {
          type: DataTypes.STRING(3000)
  
      },
      age: {
          type: DataTypes.INTEGER.UNSIGNED
      },
      weitgh: {
          type: DataTypes.DOUBLE
      },
  
      history: {
          type: DataTypes.TEXT
      },
  
  }, {
      sequelize,
      modelName: 'Character',freezeTableName: true,
    });
    return Character;
};