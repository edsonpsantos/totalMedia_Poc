import {
	Box,
	Icon,
	IconButton,
	Theme,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { ReactNode } from 'react';

import { IReactNodeProviderProps, useDrawerContext } from '../contexts';

interface IPageBaseLayoutProps extends IReactNodeProviderProps {
	title: string;
	toolbar?: ReactNode;
}

export const PageBaseLayout: React.FC<IPageBaseLayoutProps> = ({
	title,
	toolbar,
	children,
}) => {
	const screenSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
	const screenMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const theme = useTheme();
	const { toggleDrawerOpen } = useDrawerContext();

	return (
		<Box height='100%' display='flex' flexDirection='column' gap={1}>
			<Box
				padding={1}
				display='flex'
				alignItems='center'
				height={theme.spacing(screenSmDown ? 6 : screenMdDown ? 8 : 12)}
				gap={1}
			>
				{screenSmDown && (
					<IconButton onClick={toggleDrawerOpen}>
						<Icon>menu</Icon>
					</IconButton>
				)}
				<Typography
					overflow='hidden'
					textOverflow='ellipsis'
					whiteSpace='nowrap'
					variant={screenSmDown ? 'h5' : screenMdDown ? 'h4' : 'h3'}
				>
					{title}
				</Typography>
			</Box>

			{toolbar && <Box>{toolbar}</Box>}

			<Box flex={1} overflow='auto'>
				{children}
			</Box>
		</Box>
	);
};
