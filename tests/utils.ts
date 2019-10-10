const MongodbMemoryServer = require("mongodb-memory-server").default;
const mongoose=require("mongoose");
import { dummy } from "./fixtures/fixture";
const async = require("async");
// Your models and server
const mongod = new MongodbMemoryServer();
const data = require("./data.json");

// Create connection to mongoose before all tests
export const before = async t => {
  mongoose.connect(await mongod.getConnectionString(), {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
};

export const beforeEach = async t => {
  for (let index = 0; index < data.length; index++) {
    const record = new dummy({ name: data[index] });
    await record.save();
  }
};
export const afterEach = async t => {
  await dummy.remove({})
   
  };
export const after = async t => {
  mongoose.disconnect();
  mongod.stop();
};
