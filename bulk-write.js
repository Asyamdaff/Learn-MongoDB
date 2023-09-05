db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "Asyam",
        full_name: "Asyam",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "Daffa",
        full_name: "Daffa",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["Asyam", "Daffa", "Tsaqif"],
        },
      },
      update: {
        $set: {
          full_name: "Asyam Daffa Tsaqif",
        },
      },
    },
  },
]);
