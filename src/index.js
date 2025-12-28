import "dotenv/config"   // 🔥 AUTO loads .env FIRST

import connectDB from "./db/index.js"
import { app } from "./app.js"

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("❌ MONGO DB connection failed", err)
})
