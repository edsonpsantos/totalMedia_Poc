import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const CountriesController = {
  ...create,
  ...getAll,
  ...getById,
};
