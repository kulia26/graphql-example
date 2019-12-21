module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      freezeTableName: true,
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.orderItem);
  };

  return Product;
}