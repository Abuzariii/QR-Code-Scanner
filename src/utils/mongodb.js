import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://abuzariii:abuzar%40mongodb1234@users-cluster.mcqhi1q.mongodb.net/";
const options = {};

let client;
let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }
const environment = "development";

if (environment === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
