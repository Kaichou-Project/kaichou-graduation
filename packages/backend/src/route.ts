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
import { authMiddleware } from '@middleware/auth'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getAllMessagesController)
  router.post('/message', createMessageController)
  router.put('/message', authMiddleware, updateMessageController)
  router.delete('/message', authMiddleware, deleteMessageController)

  // Video routes here
  router.get('/video', getAllVideoController)
  router.post('/video', createVideoController)
  router.put('/video', authMiddleware, updateVideoController)
  router.delete('/video', authMiddleware, deleteVideoController)

  // Fanart route
  router.get('/fanart', getAllFanartController)
  router.post('/fanart', createFanartController)
  router.put('/fanart', authMiddleware, updateFanartController)
  router.delete('/fanart', authMiddleware, deleteFanartController)

  return router
}

export default routes
