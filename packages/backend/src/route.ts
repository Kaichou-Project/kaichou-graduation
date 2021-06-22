import { Router } from 'express'
import { indexController } from '@controller/front'
import {
  createMessageController,
  getAllMessagesController,
  updateMessageController,
  deleteMessageController,
} from '@controller/message'
import {
  createVideoController,
  deleteVideoController,
  getAllVideoController,
  updateVideoController,
} from '@controller/video'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getAllMessagesController)
  router.post('/message', createMessageController)
  router.put('/message', updateMessageController)
  router.delete('/message', deleteMessageController)

  // Video routes here
  router.get('/video', getAllVideoController)
  router.post('/video', createVideoController)
  router.put('/video', updateVideoController)
  router.delete('/video', deleteVideoController)

  return router
}

export default routes
