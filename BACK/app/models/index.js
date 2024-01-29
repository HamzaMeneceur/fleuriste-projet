const Admin = require('./admin');
const Category = require('./category');
const Item = require('./item');

// relation one to many * 2
Admin.hasMany(Item,{
    foreignKey: 'admin_id'
});
Item.belongsTo(Admin,{
    foreignKey: 'admin_id'
});

Category.hasMany(Item,{
    foreignKey: 'category_id',
    as: 'items'
});
Item.belongsTo(Category,{
    foreignKey: 'category_id',
    as: 'categories'
});

module.exports = { Admin, Category, Item };