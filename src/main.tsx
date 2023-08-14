import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import SearchPage from '@pages/SearchPage';
import MainPage from '@pages/MainPage';

import './global.css';
import ModalsProvider from './context/ModalsContext';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'search',
				element: <SearchPage />,
			},
			{
				path: 'mypage/*',
				element: <UserPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ModalsProvider>
		<RouterProvider router={router} />
	</ModalsProvider>
);
