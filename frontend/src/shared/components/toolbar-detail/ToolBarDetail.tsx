/* eslint-disable indent */
import {
	Box,
	Button,
	Divider,
	Icon,
	Paper,
	Skeleton,
	Typography,
	useTheme,
} from '@mui/material';

interface IToolBarDetailProps {
	showBackButton?: boolean;
	showLoadingBackButton?: boolean;
	onClickBackButton?: () => void;
}

export const ToolBarDetail: React.FC<IToolBarDetailProps> = ({
	showBackButton = true,
	showLoadingBackButton = false,
	onClickBackButton,
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
			{showBackButton && !showLoadingBackButton && (
				<Button
					variant='outlined'
					color='primary'
					disableElevation
					startIcon={<Icon>arrow_back_ios</Icon>}
					onClick={onClickBackButton}
				>
					<Typography
						variant='button'
						whiteSpace='nowrap'
						textOverflow='ellipsis'
						overflow='hidden'
					>
						Back
					</Typography>
				</Button>
			)}
			{showLoadingBackButton && <Skeleton width={109} height={65} />}
		</Box>
	);
};
