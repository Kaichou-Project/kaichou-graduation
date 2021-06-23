import { Router } from 'express'
import { indexController } from '@controller/front'
import {
  createMessageController,
  getAllMessagesController,
  updateMessageController,
  deleteMessageController,
} from '@controller/message'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getAllMessagesController)
  router.post('/message', createMessageController)
  router.put('/message', updateMessageController)
  router.delete('/message', deleteMessageController)

  return router
}

export default routes
