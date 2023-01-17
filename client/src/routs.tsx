
import ProductItem from "./component/device/DeviceItem"
import About from "./pages/About"

import Basket from "./pages/Basket/Basket"
import Details from "./pages/Details"
import Device from "./pages/device-page/DevicePage"
import DeviceList from "./pages/device-list/DeviceList"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import { ABOUT_ROUTE, BASKET_ROUTE, DETAILS_ROUTE, DEVICELIST_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE } from "./utills/consts"
import AdminPanel from "./pages/admin-panel/AdminPanel"

export const authRoutes = [
	{
		path: BASKET_ROUTE,
		element: <Basket />
	},
	{
		path: ADMIN_ROUTE,
		element: <AdminPanel />
	}
]

export const publicRoutes = [
	{
		path: ABOUT_ROUTE,
		element: <About />
	},
	{
		path: DEVICE_ROUTE + '/:id',
		element: <Device />
	},
	{
		path: DETAILS_ROUTE,
		element: <Details />
	},
	{
		path: HOMEPAGE_ROUTE,
		element: <HomePage />
	},
	{
		path: LOGIN_ROUTE,
		element: <Login />
	},
	{
		path: REGISTRATION_ROUTE,
		element: <Login />
	},
	{
		path: DEVICELIST_ROUTE,
		element: <DeviceList />
	},
]