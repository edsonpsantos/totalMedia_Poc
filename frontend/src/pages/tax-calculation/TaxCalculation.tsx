import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';

import { ToolBarDetail } from '../../shared/components';
import { PageBaseLayout } from '../../shared/layouts';
import { number } from 'yup';

export const TaxCalculation: React.FC = () => {
	const navigate = useNavigate();
	const [priceNoVat, setPriceNoVat] = useState(0);
	const [valueAddTax, setValueAddTax] = useState(0);
	const [priceInclVat, setPriceInclVat] = useState(0);

	const handlePriceWithoutVat = (event: any) => {
		setPriceNoVat(Number(event.target.value));
	};

	const handleTaxCalc = (event: any) => {
		const value = Number(event.target.value);
		setValueAddTax(priceNoVat * value);
		setPriceInclVat(priceNoVat * value);
	};

	const handleValueAddTax = (event: any) => {
		const value = Number(event.target.value);
		setValueAddTax(priceNoVat * value);
	};

	const handlePriceInclVat = (event: any) => {
		const value = Number(event.target.value);
		setPriceInclVat(priceInclVat * value);
	};

	useEffect(() => {
		setPriceNoVat(priceNoVat);
		setValueAddTax(valueAddTax);
		setPriceInclVat(priceInclVat);
	}, [priceNoVat, valueAddTax]);
	return (
		<PageBaseLayout title={'Tax Calculation'} toolbar={<ToolBarDetail onClickBackButton={() => navigate('/vat')} />}>
			<Box margin={1} display='flex' flexDirection='column' component={Paper} variant='outlined'>
				<div className='App'>
					<div>
						<select>
							<option value='France'>France</option>
							<option value='Portugal'>Portugal</option>
							<option value='Spain'>Spain</option>
							<option value='United Kingdom'>United Kingdom</option>
						</select>
					</div>
					<br />
					<br />
					<div onChange={(event) => handleTaxCalc(event)}>
						<input type='radio' name='rate' value={0.1} /> 10%
						<input type='radio' name='rate' value={0.2} /> 20%
						<input type='radio' name='rate' value={0.3} /> 30%
					</div>
					<br />
					<br />
					<div>
						<label>Price withour VAT </label>
						<input value={priceNoVat} onChange={(event) => handlePriceWithoutVat(event)} />
						<br />
						<br />
						<label>Value-Added Tax</label>
						<input value={valueAddTax} onChange={(event) => handleValueAddTax(event)} />
						<label></label>
						<br />
						<br />
						<label>Price incl. VAT</label>
						<input value={priceInclVat} onChange={(event) => handlePriceInclVat(event)} />
					</div>
				</div>
			</Box>
		</PageBaseLayout>
	);
};
