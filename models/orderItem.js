module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define('orderItem', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    },
    {
      freezeTableName: true,
    }
  );

  orderItem.associate = (models) => {
    orderItem.belongsTo(models.product);
  };

  orderItem.associate = (models) => {
    orderItem.belongsTo(models.user);
  };

  return orderItem;
}