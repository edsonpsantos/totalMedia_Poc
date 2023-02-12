import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware/Validation';
import * as yup from 'yup';

interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));
export const getById = async (req: Request<IParamProps>, res: Response) => {
  if (Number(req.params.id) === 999999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      errors: {
        default: 'Register not found',
      },
    });
  }

  // ################################################
  // To Mock return test
  return res.status(StatusCodes.OK).json({
    id: req.params.id,
    name: 'Spain',
    vatRate: [21, 10],
  });
  // ################################################
};
