import pkg from 'pg'
import { env } from './env.js'
const { Pool } = pkg
console.log('name', env.DB_NAME)
console.log('host', env.DB_HOST)
console.log('port', env.DB_PORT)
console.log('user', env.DB_USER)
console.log('password', env.DB_PASSWORD)
const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
})

pool
  .connect()
  .then(() => console.log('✅ PostgreSQL Connected'))
  .catch((err) => console.error('❌ DB Error:', err))

export default pool
