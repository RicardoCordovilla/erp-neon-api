const userRouter = require('./models/users/users.router')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initModels')
const cors = require('cors')
const productsRouter = require('./models/products/products.routes')
const signsRouter = require('./models/signs/signs.routes')
const projectsRouter=require('./models/Projects/projects.routes')
const customersRouter = require('./models/customers/customers.routes')
const assistanceRouter = require('./models/assistance/assistance.routes')

const db = require('./utils/database')
const express = require('express')
const app = express()
app.use(express.json())
const corsOptions = {
    // credentials: true,
    origin: '*'
}
app.use(cors(corsOptions))




db.authenticate()
    .then(() => { console.log('DB authenticated') })
    .catch(err => { console.log(err) })

// db.sync({ force: true })
// db.sync({ alter: true })
//     .then(() => { console.log('DB synced') })
//     .catch(err => { console.log(err) })

initModels()

const { port } = require('./config')

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        users: `localhost:${port}/api/users`
    })
})


app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)



app.use('/api/sigs', signsRouter)
app.use('/api/products', productsRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/customers', customersRouter)
app.use('/api/assistance', assistanceRouter)

app.listen(port, () => {
    console.log(`server started at ${port}`)
})