module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      isCompleted: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.product);
  };

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.user);
  };

  return OrderItem;
}