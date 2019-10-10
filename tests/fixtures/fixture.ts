

import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
import { mongooseuuid } from "../../src/index";
export type TypeDummy = IDummy & Document;
interface IDummy {
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
export const dummy: Model<TypeDummy> = mongoose.model("dummy", modelSchema);