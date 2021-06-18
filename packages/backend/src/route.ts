import { Router } from 'express'
import { indexController } from '@controller/front'
import {
  createMessageController,
  getAllMessagesController,
} from '@controller/message'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getAllMessagesController)
  router.post('/message', createMessageController)

  return router
}

export default routes
