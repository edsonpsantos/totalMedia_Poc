import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Countries -> GetAll', () => {
  it('Should have get register by exists id', async () => {
    const response = await testServer.post('/countries').send({
      name: 'United Kingdon',
      vatRate: [5, 20],
    });
    expect(response.statusCode).toEqual(StatusCodes.CREATED);

    const responseSearchData = await testServer
      .get(`/countries/${response.body}`)
      .send();

    expect(responseSearchData.statusCode).toEqual(StatusCodes.OK);
    expect(responseSearchData.body).toHaveProperty('name');
  });

  it('Should have get register by not exists id', async () => {
    const response = await testServer.get('/countries/999999').send({});
    expect(response.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(response.body).toHaveProperty('errors.default');
  });
});
