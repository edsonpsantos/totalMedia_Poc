import axios from 'axios';
import { Environment } from '../../../environment';
import { errorInterpector, responseInterceptor } from './interceptors';

const Api = axios.create({ baseURL: Environment.BASE_URL });

Api.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterpector(error)
);

export { Api };
