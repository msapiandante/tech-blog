const sequelize = require("../config/connection");

const {Model, DataTypes} = require ('sequelize')
class Comments extends Model{}
Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            allowNull: false,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "blogpost",
                key: "id"
            }
        },
    }, 
    {
        sequelize,
        timestamps: true, 
        freezeTableName: true,
        underscored: true,
        modelName: "comments"
    },
);
module.exports = Comments