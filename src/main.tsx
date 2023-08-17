import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import UserPage from '@pages/UserPage';
import SearchPage from '@pages/SearchPage';

import ModalsProvider from './context/ModalsContext';

import './global.css';
import CartPage from './pages/CartPage';

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
				path: 'cart',
				element: <CartPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'mypage/*',
				element: <UserPage />,
			},
			{
				path: 'search',
				element: <SearchPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ModalsProvider>
		<RouterProvider router={router} />
	</ModalsProvider>
);
