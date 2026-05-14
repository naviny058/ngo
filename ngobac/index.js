const express = require('express')
const authRouter = require('./routes/auth.routes');
const connectDB = require('./db.index');
const cors = require('cors')


const app = express();
const PORT = 8080;
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('ok')
})
app.use('/auth', authRouter)

app.listen(PORT, async () => {
  await connectDB()
  console.log(`server is listening http://localhost:${PORT}`)
}
)