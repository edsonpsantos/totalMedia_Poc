import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

import { Environment } from '../../environment';

interface IToolBarListProps {
	textSearch?: string;
	showSearchInput?: boolean;
	onChangeTextSearch?: (newText: string) => void;

	labelNewButton?: string;
	showNewButton?: boolean;
	iconNewButton?: string;
	onClickNewButton?: () => void;
}

export const ToolBarList: React.FC<IToolBarListProps> = ({
	textSearch = '',
	showSearchInput = false,
	onChangeTextSearch,
	labelNewButton = 'New',
	showNewButton = true,
	iconNewButton = 'add',
	onClickNewButton,
}) => {
	const theme = useTheme();
	return (
		<Box
			gap={1}
			marginX={1}
			padding={1}
			paddingX={2}
			display='flex'
			alignItems='center'
			height={theme.spacing(5)}
			component={Paper}
		>
			{showSearchInput && (
				<TextField
					size='small'
					placeholder={Environment.INPUT_SEARCH}
					value={textSearch}
					onChange={(event) => onChangeTextSearch?.(event.target.value)}
				/>
			)}
			<Box flex={1} display='flex' justifyContent='end'>
				{showNewButton && (
					<Button
						variant='contained'
						color='primary'
						disableElevation
						startIcon={<Icon>{iconNewButton}</Icon>}
						onClick={onClickNewButton}
					>
						{labelNewButton}
					</Button>
				)}
			</Box>
		</Box>
	);
};
