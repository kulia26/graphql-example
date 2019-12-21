export default `
  type User {
    id: ID!
    name: String!
    phone: String!
    password: String!
    orderItems: [OrderItem!]!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    cost: Int!
    orderItems: [OrderItem!]!
  }
  type OrderItem {
    id: ID!
    userId: ID!
    user: User!
    productId: ID!
    product: Product!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User
    product(id: ID!): Product
    products: [Product!]!
    orderItem(id: ID!): OrderItem
    orderItems: [OrderItem!]!
  }
  type Mutation {
    createOrderItem(userId: ID!, productId: ID!): OrderItem!
    deleteOrderItem(id: ID!): Int!
  }
`;