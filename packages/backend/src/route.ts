import { Router } from 'express'
import { indexController } from './controllers/index.controller'

const routes = () => {
  const router: Router = Router()

  // Register routes here
  router.get('/', indexController)

  return router
}

export default routes
