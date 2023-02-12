import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {
	createContext,
	ReactNode,
	useState,
	useCallback,
	useMemo,
	useContext,
} from 'react';
import { DarkTheme, LightTheme } from '../themes';

type themeNameMode = 'light' | 'dark';

interface IThemeContextData {
	themeName: themeNameMode;
	toggleTheme: () => void;
}

export interface IReactNodeProviderProps {
	children?: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IReactNodeProviderProps> = ({ children }) => {
	const [themeName, setThemeName] = useState<themeNameMode>('light');

	const toggleTheme = useCallback(() => {
		setThemeName((oldThemeName) => (oldThemeName === 'light' ? 'dark' : 'light'));
	}, []);

	const theme = useMemo(() => {
		if (themeName === 'light') return LightTheme;

		return DarkTheme;
	}, [themeName]);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
