import { Environment } from '../../../environment';
import { Api } from '../axios-config';

export interface ICountryList {
	id: number;
	name: string;
	vat: number;
}

type TCountryTotalCount = {
	data: ICountryList[];
};

const getAll = async (): Promise<TCountryTotalCount | Error> => {
	try {
		const relativeUrl = '/Country';

		const { data } = await Api.get(relativeUrl);

		if (data) {
			return {
				data,
			};
		}
		return new Error(Environment.DATA_ERROR_ACCESS);
	} catch (error) {
		console.error(error);
		return new Error(
			(error as { message: string }).message || Environment.DATA_ERROR_ACCESS
		);
	}
};

export const CountryService = {
	getAll,
};
