import mongoose from 'mongoose'
import { STATUS_DB_CONNECTED } from '@constant/general'

export default async function initDB(dbUri: string) {
  const connectionStatus = await mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      poolSize: 8,
    })
    .then(() => STATUS_DB_CONNECTED)
    .catch((error) => {
      throw `DB Error ${error}`
    })

  return connectionStatus
}
