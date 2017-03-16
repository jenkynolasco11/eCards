import Koa from 'koa'
import logger from 'koa-logger'
import bodyparser from 'koa-bodyparser'
// import koaRouter from 'koa-router'

import config from './config'

const app = new Koa()

app
  .use(logger())
  .use(bodyparser())

const auxPort = 8001
const PORT = config.PORT || auxPort
app
  .listen( PORT, err => {
    if(err) throw new Error(`Something happened with the server: ${ err }`)
    console.log(`Server started at port ${ PORT }`)
  })
