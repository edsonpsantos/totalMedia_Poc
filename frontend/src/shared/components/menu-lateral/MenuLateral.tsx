import {
	Avatar,
	Box,
	Divider,
	Drawer,
	Icon,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import {
	IReactNodeProviderProps,
	useAppThemeContext,
	useDrawerContext,
} from '../../contexts';

interface IListItemLinkProps {
	to: string;
	icon: string;
	label: string;
	onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
	const navigate = useNavigate();

	const resolvedPath = useResolvedPath(to);
	const match = useMatch({ path: resolvedPath.pathname, end: false });

	const handleClick = () => {
		navigate(to);
		//if not undefined execute function
		onClick?.();
	};

	return (
		<ListItemButton onClick={handleClick} selected={!!match}>
			<ListItemIcon>
				<Icon>{icon}</Icon>
			</ListItemIcon>
			<ListItemText primary={label} />
		</ListItemButton>
	);
};

export const MenuLateral: React.FC<IReactNodeProviderProps> = ({ children }) => {
	const theme = useTheme();
	const screenSmDown = useMediaQuery(theme.breakpoints.down('sm'));
	const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
	const { toggleTheme, themeName } = useAppThemeContext();

	return (
		<>
			<Drawer
				open={isDrawerOpen}
				onClose={toggleDrawerOpen}
				variant={screenSmDown ? 'temporary' : 'permanent'}
			>
				<Box
					width={theme.spacing(28)}
					height='100%'
					display='flex'
					flexDirection='column'
				>
					<Box
						width='100%'
						height={theme.spacing(20)}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Avatar
							sx={{ height: theme.spacing(16), width: theme.spacing(16) }}
							src='https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so'
						/>
					</Box>
					<Divider />
					<Box flex={1}>
						<List component='nav' aria-label='main mailbox folders'>
							{drawerOptions.map((drawerOption) => (
								<ListItemLink
									key={drawerOption.path}
									to={drawerOption.path}
									icon={drawerOption.icon}
									label={drawerOption.label}
									onClick={screenSmDown ? toggleDrawerOpen : undefined}
								/>
							))}
						</List>
					</Box>
					<Box>
						<List component='nav' aria-label='main mailbox folders'>
							<ListItemButton onClick={toggleTheme}>
								<ListItemIcon>
									<Icon>{themeName === 'dark' ? 'brightness_7' : 'brightness_4'}</Icon>
								</ListItemIcon>

								<ListItemText
									primary={themeName === 'dark' ? 'Light Mode' : 'Dark Mode'}
								/>
							</ListItemButton>
						</List>
					</Box>
				</Box>
			</Drawer>

			<Box height='100vh' marginLeft={screenSmDown ? 0 : theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
