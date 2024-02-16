import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {register} from 'swiper/element/bundle';

/* --- Criar rotas!!!

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dublagens from '../../routes/dublagens/dublagens';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "Dublagens",
        element: <Dublagens />
    }
])

*/






register();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


