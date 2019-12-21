export default {
  User: {
    orderItems: (parent, args, context, info) => parent.getOrderItems(),
  },
  Product: {
    orderItems: (parent, args, context, info) => parent.getOrderItems(),
  },
  OrderItem: {
    user: (parent, { id }, { db }, info) => db.user.findByPk(parent.get().userId),
    product: (parent, { id }, { db }, info) => db.product.findByPk(parent.get().productId),
  },
  Query: {
    users: (parent, args, { db }, info) => db.user.findAll(),
    products: (parent, args, { db }, info) => db.product.findAll(),
    orderItems: (parent, args, { db }, info) => db.orderItem.findAll(),
    user: (parent, { id }, { db }, info) => db.user.findByPk(id),
    product: (parent, { id }, { db }, info) => db.product.findByPk(id),
    orderItem: (parent, { id }, { db }, info) => db.orderItem.findByPk(id),
  },
  Mutation: {
    createOrderItem: (parent, { userId, productId }, { db }, info) =>
      db.orderItem.create({
        userId: userId,
        productId: productId,
        isCompleted: null,
      }),
    updateOrderItem: (parent, {id, isCompleted}, { db }, info) => {
      db.orderItem.update({
        isCompleted: isCompleted
      },
      {
        where: {
          id: id
        }
      });
      return db.orderItem.findByPk(id)
    },
    deleteOrderItem: (parent, {id}, { db }, info) =>
      db.orderItem.destroy({
        where: {
          id: id
        }
      })
  }
};