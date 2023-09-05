// Insert Developer document
db.customers.insertOne({
  _id: "Developer",
  full_name: "Developer",
});

// Delete document by _id
db.customers.deleteOne({
  _id: "Developer",
});

// Insert many Developer documents
db.customers.insertMany([
  {
    _id: "Developer1",
    full_name: "Developer1",
  },
  {
    _id: "Developer2",
    full_name: "Developer2",
  },
  {
    _id: "Developer3",
    full_name: "Developer3",
  },
]);

// Delete many documents
db.customers.deleteMany({
  _id: {
    $regex: "Developer",
  },
});
