
import test from "ava";
import request from "supertest";
import { dummy,dummy2 } from "./fixtures/fixture";
import { before,beforeEach, afterEach,after } from "./utils";

test.beforeEach(beforeEach)
test.afterEach(afterEach)
test.before(before)
test.after(after)
// test.after.always(after);
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

test.serial("should throw error no exist field name", async (t) => {
  await t.throwsAsync(async () => {
		return await dummy2.create({name:"name"})
	});

});

