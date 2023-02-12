import { createTheme } from '@mui/material';
import { cyan, yellow, indigo } from '@mui/material/colors';

export const DarkTheme = createTheme({
	palette: {
		mode: 'dark',
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
			default: '#202124',
			paper: '#303134',
		},
	},
	typography: {
		allVariants: {
			color: '#fff',
		},
	},
});
