const conn = require('./conn');
const Product = require('./Product');
const User = require('./User');
const LineItem = require('./LineItem');
const Order = require('./Order');
const

User.hasMany(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

module.exports = {
  conn,
  User,
  Product,
  LineItem,
  Order
};
