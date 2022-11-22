const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://dbuser:dbpassword@cluster0.ar7siqu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  console.log("connected to database");
  //   const db = client.db("test");
  //   const x = await db.createCollection("devices");
  //   x.insertOne({ name: "laptop" });
  //   const collection = db.collection("devices");

  // perform actions on the collection object
  //   setTimeout(() => {
  client.close();
  //   }, 60000);
});
