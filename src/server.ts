import express from 'express';

const PORT = 3000
const app = express();

app.get('/', (req, res) => {
  return res.json({ ok: 'true' })
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})