import express from 'express'
import cors from 'cors'
import pool from './config/db.js'
const app = express()
const port = 3000

app.use(express.json())

app.use(cors())

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT current_database()')
  res.send(`The DB name is: ${result.rows[0].current_database}`)
})

// testing postgres

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
