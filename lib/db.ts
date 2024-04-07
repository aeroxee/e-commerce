import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGO_URL;

// const client = new MongoClient(uri as string, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("aeroxee").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

// export default client;

const ClientDB = new MongoClient(`${process.env.MONGO_URL}`, {
  serverApi: ServerApiVersion.v1,
});

export { ClientDB };
