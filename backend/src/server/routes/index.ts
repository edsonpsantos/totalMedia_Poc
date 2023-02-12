import { Router } from 'express';

import { CountriesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.send('API works');
});

router.get(
  '/countries',
  CountriesController.getAllValidation,
  CountriesController.getAll
);
router.get(
  '/countries/:id',
  CountriesController.getByIdValidation,
  CountriesController.getById
);
router.post(
  '/countries',
  CountriesController.createValidation,
  CountriesController.create
);

export { router };
