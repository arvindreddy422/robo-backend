const express = require('express')

const app = express()
app.use(express.json())

const roboName = [
  'Agrobot',
  'FarmBot',
  'Ecorobotix',
  'Aquabot',
  'Blue River LettuceBot',
  'Vincent FarmBot',
  'Tertill',
  'Ripples',
  'Saildrone',
  'Roomba',
  'Ecovacs Deebot',
  'Kärcher RC3000',
  'BoniRob',
  'Bosch Deepfield Robotics',
  'Naio Technologies Oz',
]

const status = ['Active', 'Idle', 'Charging']

app.get('/', (req, res) => {
  let newData = []
  for (let name of roboName) {
    let rn = Math.floor(Math.random() * 3)
    let bp = Math.floor(Math.random() * 101)

    let obj = { name, status: status[rn], battery: bp }
    newData.push(obj)
  }
  res.json({ items: newData })
})

app.listen('4000', () => {
  console.log('server is up on 4000')
})
