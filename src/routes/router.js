import express from 'express'
import mailrouter from './mailRouter.js'
import dbrouter from './dbRouter.js'
import test from './test.js'
import exam from './examRouter.js'

const router = express.Router();

router.use('/', mailrouter);
router.use('/db', dbrouter);
router.use('/db/test', test)
router.use('/exam', exam)

export default router