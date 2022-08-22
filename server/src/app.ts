import express from 'express'

import testRouter from './routes/test-route';

const app = express();

app.use(testRouter);

export default app;