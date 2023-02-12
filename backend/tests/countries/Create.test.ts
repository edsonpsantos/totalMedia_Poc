import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Countries -> Create', () => {
  it('Should have created register', async () => {
    const response = await testServer.post('/countries').send({
      name: 'Portugal',
      vatRate: [6, 13, 23],
    });

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof response.body).toEqual('number');
  });

  it('Should not create a register with a small name, less then 3 characters o empty', async () => {
    const response = await testServer.post('/countries').send({
      name: 'Sp',
      vatRate: [6, 13, 23],
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.name');
  });

  it('Should not create a register with a country without one vat rate', async () => {
    const response = await testServer.post('/countries').send({
      name: 'Sp',
      vatRate: [],
    });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors.body.vatRate');
  });
});
