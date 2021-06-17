import { Router } from 'express'
import { indexController } from '@controller/front'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  return router
}

export default routes
