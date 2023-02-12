import { createTheme } from '@mui/material';
import { cyan, indigo, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
	palette: {
		primary: {
			main: indigo[700],
			dark: indigo[800],
			light: indigo[500],
			contrastText: '#fff',
		},
		secondary: {
			main: cyan[500],
			dark: cyan[400],
			light: cyan[300],
			contrastText: '#fff',
		},
		background: {
			default: '#f5f5f5',
			paper: '#fff',
		},
	},
});
