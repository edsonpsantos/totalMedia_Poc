import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware/Validation';

interface ICountry {
  name: string;
  vatRate: (number | undefined)[];
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICountry>(
    yup.object().shape({
      name: yup.string().required().min(3),
      vatRate: yup.array().min(1).of(yup.number()).required(),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICountry>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};
