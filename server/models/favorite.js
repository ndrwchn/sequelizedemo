'use strict';

module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    title: DataTypes.STRING
  });

//   Task.associate = function (models) {
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return Favorite;
};