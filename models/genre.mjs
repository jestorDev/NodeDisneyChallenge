import { Model, DataTypes } from "sequelize";

export default (sequelize)=>{
    class Genre extends Model {}
    Genre.init({
  
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
  
      }, {
      sequelize,
      modelName: 'Genre',freezeTableName: true,
    });
    return Genre;
};