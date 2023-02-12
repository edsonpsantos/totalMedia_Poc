import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware/Validation';
import * as yup from 'yup';

interface IQueryProps {
  page?: yup.Maybe<number | undefined>;
  limit?: yup.Maybe<number | undefined>;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().notRequired().moreThan(0),
      limit: yup.number().notRequired().moreThan(0),
      filter: yup.string().nonNullable(),
    })
  ),
}));
export const getAll = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response
) => {
  //####################################################################
  //TO MOCK TEST
  return res.status(StatusCodes.OK).json({
    id: 1,
    name: 'France',
    vatRate: [5.5, 20, 10],
  });
  //####################################################################
};
