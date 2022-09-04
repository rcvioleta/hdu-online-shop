import express from 'express'

import { greet } from '../controllers/test-controller'

const testRouter = express.Router();

testRouter.use('/api/test', greet);

export default testRouter;