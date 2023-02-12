import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICountry {
  name: string;
  vatRate: (number | undefined)[];
}

interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICountry>(
    yup.object().shape({
      name: yup.string().required().min(3),
      vatRate: yup.array().min(1).of(yup.number()).required(),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICountry>, res: Response) => {
  console.log(req.body);

  return res.send('Country Created!');
};
