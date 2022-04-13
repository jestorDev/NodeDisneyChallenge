import { Model, DataTypes } from "sequelize";

export default (sequelize)=>{

    class Movie extends Model {
    }
    
    Movie.init({
    
        ID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(200)
        },
        image: {
            type: DataTypes.STRING(3000)
        },
        creation_date: {
            type: DataTypes.DATE
        },
        rating: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0.0,
                max: 5.0,
            }
        },
    
    }, {
        sequelize,
        modelName: 'Movie', freezeTableName: true,
    });
    return Movie
};