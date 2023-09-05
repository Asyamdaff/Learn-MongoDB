// select *  from customers where _id = 'Tsaqif'
db.customers.find({
  _id: "Tsaqif",
});

// select * from customers where name = 'Asyam Daffa Tsaqif'
db.customers.find({
  name: "Asyam Daffa Tsaqif",
});

// select * from products where price = 2000
db.products.find({
  price: 2000,
});

// select * from orders where items.product_id = 1
db.orders.find({
  "items.product_id": 1,
});
