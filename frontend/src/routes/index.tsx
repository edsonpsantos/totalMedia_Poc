import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

import { Dashboard, TaxCalculation } from '../pages';

export const AppRoutes = () => {
	const { setDrawerOptions } = useDrawerContext();

	useEffect(() => {
		setDrawerOptions([
			{
				icon: 'home',
				label: 'Home',
				path: '/home',
			},
			{
				icon: 'calculator',
				label: 'Tax Calculation',
				path: '/taxcalculation',
			},
		]);
	}, []);

	return (
		<Routes>
			<Route path='/home' element={<Dashboard />} />
			<Route path='/taxcalculation' element={<TaxCalculation />} />
			<Route path='*' element={<Navigate to='/home' />} />
		</Routes>
	);
};
