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
import {
  createFanartController,
  deleteFanartController,
  getAllFanartController,
  updateFanartController,
} from '@controller/fanart'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getAllMessagesController)
  router.post('/create/message', createMessageController)
  router.put('/message', updateMessageController)
  router.delete('/message', deleteMessageController)

  // Video routes here
  router.get('/video', getAllVideoController)
  router.post('/create/video', createVideoController)
  router.put('/video', updateVideoController)
  router.delete('/video', deleteVideoController)

  // Fanart route
  router.get('/fanart', getAllFanartController)
  router.post('/create/fanart', createFanartController)
  router.put('/fanart', updateFanartController)
  router.delete('/fanart', deleteFanartController)

  return router
}

export default routes
