import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import Routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()

    this.middleware()
    this.database()
  }

  private middleware(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(Routes)
  }

  private database(): void {
    mongoose.connect(
      'mongodb+srv://elliancarlos:tokenlab@cluster0-0r7bq.mongodb.net/tsnode?retryWrites=true&w=majority'
      , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
  }
}

export default new App().express
