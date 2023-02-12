import { ToolBarDetail } from '../../shared/components';
import { PageBaseLayout } from '../../shared/layouts';

export const Dashboard = () => {
	return (
		<PageBaseLayout title='Home' toolbar={<ToolBarDetail />}>
			Dashboard
		</PageBaseLayout>
	);
};
