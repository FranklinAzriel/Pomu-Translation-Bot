/**
 * LUNA'S TRANSLATIONS DISCORD BOT
 */
Error.stackTraceLimit = Infinity
import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/../.env' })
import { config } from './config'
import { client } from './core/'
import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL ?? 'mongodb://localhost/luna'

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

process.on('uncaughtException', function (err) {
  console.log('Uncaught exception: ' + err)
  console.log(err.stack)
})

client.login(config.token)
