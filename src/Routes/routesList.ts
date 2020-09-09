import MainPage from 'pages/MainPage';
import Options from 'pages/Options';
import CreateList from 'pages/CreateList';

import { RouteProps } from 'react-router';


const routes: Array<RouteProps> = [
  { path: '/', component: MainPage },
  { path: '/list', component: Options },
  { path: '/list/create', component: CreateList },
  { path: '/list/create/:id', component: Options }, // add component instead of Options here to handle saved list
]

export default routes