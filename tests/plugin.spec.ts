
import test from "ava";
import request from "supertest";
import { dummy } from "./fixtures/fixture";
import { before,beforeEach, afterEach,after } from "./utils";

test.beforeEach(beforeEach)
test.afterEach(afterEach)
test.before(before)
test.after(after)

test.serial("no error same count as data", async (t) => {
  const count = await dummy.find({}).countDocuments()

  t.is(count,601)
});
test.serial("no duplicate", async (t) => {
  const firstrecord = await dummy.find({})
  const prev=firstrecord[0]
  const isexist = await dummy.find({'uniqueid':prev.uniqueid})
  const count=isexist.length
  // console.log(firstrecord);
  t.is(count,1)
});
test.after.always(after);
// import mongoose from "mongoose";
// import * as async from "async";

// const data = require("./data.json");
// async function fillDummy() {
//     data.forEach(async (e) => {
//         const record = await dummy.create({name: e});
//         await record.save();
//     });
//     // async.forEachOf(data, async (item) => {

//     // });

// }
// async function rmData() {
//     await dummy.deleteMany({});
// }



// describe("mongoose uuid plugin ", () => {

//     beforeAll(async () => {
//         mongoose.connect(global.__MONGO_URI__, {
//           useNewUrlParser: true
//     }, (err) => {
//           if (err) {
//             console.error(err);
//             process.exit(1);
//         }
//         });
//         await fillDummy();

//       });
//       afterAll(async () => {
//         console.log("calling");
//         await rmData();
//         // await mongoose.disconnect((err => {
//         //   if (err) {
//         //     console.error(err);
//         //     process.exit(1);
//         // }
//         // }));
//       });

//     it("all data saved", async () => {
//         const x = await dummy.find({}).countDocuments();
//         expect(x).toBe(601);
//     });
// });

