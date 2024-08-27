import { useRoutes } from 'react-router-dom';
import { routes } from './routes/routes';
import MainPage from '../pages/main-page/MainPage';
import NowPage from '../pages/now-page/NowPage';
import HistoryPage from '../pages/history-page/HistoryPage';

export const Router = () => {

	return useRoutes([
		{
			path: routes.main,
			element: <MainPage />
		},
		{
			path: routes.now,
			element: <NowPage />
		},
		{
			path: routes.history,
			element: <HistoryPage />
		}
	]);
}