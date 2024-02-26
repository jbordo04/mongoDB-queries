import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import jsonRest from "./restaurants.json"
import Restaurant from "./models/model"

const uri = String(process.env.ME_CONFIG_MONGODB_URL)

// const app = express()

console.log("Hola Docker!!")

const PORT = process.env.PORT || 4000

// mongoose.connect(uri).then()
// const db = mongoose.connection
// // () => {
// db.createCollection("restaurants", { capped: false })
// db.restaurants.insert(jsonRest)

//   const result = Restaurant.find()
//   console.log("result", result)

//   app.listen(PORT, () =>
//     console.log(`Server running on http://localhost:${PORT}`)
//   )
// })
// .catch((error) => {
//   throw error
// })

// await client.close()
console.log("Adios Docker!!")
