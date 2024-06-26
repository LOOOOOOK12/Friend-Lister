import { InferSchemaType, model, Schema } from "mongoose";

const friendSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    description: { type: String },
    picture: { type: String },

}, { timestamps:true })

type Friend = InferSchemaType<typeof friendSchema>

export default model<Friend>("Friend", friendSchema)