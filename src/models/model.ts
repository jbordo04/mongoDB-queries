import { model, Schema } from "mongoose"

import { IRestaurant } from "../types/Irestaurant"

const restaurantSchema: Schema = new Schema({
  adress: {
    building: { type: String, required: true },
    coord: ["Number", "Number"],
    street: { type: String, required: true },
    zipcode: { type: Number, required: true },
  },
  borough: { type: String, required: true },
  cuisine: { type: String, required: true },
  grades: [
    {
      date: "ISODate",
      grade: "String",
      score: "Number",
    },
  ],
  name: { type: String, required: true },
  restaurant_id: { type: String },
})

export default model<IRestaurant>("Restaurant", restaurantSchema)
