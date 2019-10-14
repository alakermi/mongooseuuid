

import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
import { mongooseuuid } from "../../src/index";
export type TypeDummy = IDummy & Document;
export type TypeDummy2 = IDummy2 & Document;
interface IDummy {
 uniqueid: string;
 name: string;
}
interface IDummy2 {
    uniqueid: string;
    name: string;
   }


const modelSchema = new Schema({
    uniqueid: {type: String},
    name: {type: String}
});
modelSchema.plugin(mongooseuuid, {
    field: "uniqueid"
});
const modelSchema2 = new Schema({
    uniqueid: {type: String},
    name: {type: String}
});
modelSchema2.plugin(mongooseuuid, {
    field: "uuid"
});
export const dummy: Model<TypeDummy> = mongoose.model("dummy", modelSchema);
export const dummy2: Model<TypeDummy2> = mongoose.model("dummy2", modelSchema2);