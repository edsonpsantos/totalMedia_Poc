import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Countries -> GetAll', () => {
  it('Should have get all register', async () => {
    const responseCreate = await testServer.post('/countries').send({
      name: 'France',
      vatRate: [5.5, 20, 10],
    });
    expect(responseCreate.statusCode).toEqual(StatusCodes.CREATED);

    const responseSearch = await testServer.get('/countries').send();

    expect(responseSearch.statusCode).toEqual(StatusCodes.OK);
  });
});
