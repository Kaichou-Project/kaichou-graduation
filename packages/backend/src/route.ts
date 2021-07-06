import { Router } from 'express'
import { indexController } from '@controller/front'
import {
  createMessageController,
  getMessagesController,
} from '@controller/message'
import { createVideoController, getVideoController } from '@controller/video'
import { createFanartController, getFanartController } from '@controller/fanart'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  // Message route
  router.get('/message', getMessagesController)
  router.post('/create/message', createMessageController)
  // router.put('/message', updateMessageController)
  // router.delete('/message', deleteMessageController)

  // Video routes here
  router.get('/video', getVideoController)
  router.post('/create/video', createVideoController)
  // router.put('/video', updateVideoController)
  // router.delete('/video', deleteVideoController)

  // Fanart route
  router.get('/fanart', getFanartController)
  router.post('/create/fanart', createFanartController)
  // router.put('/fanart', updateFanartController)
  // router.delete('/fanart', deleteFanartController)

  return router
}

export default routes
