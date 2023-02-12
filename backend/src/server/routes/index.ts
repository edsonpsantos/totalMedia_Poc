import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CountriesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('API works');
});

router.post(
  '/countries',
  CountriesController.createValidation,
  CountriesController.create
);

export { router };
