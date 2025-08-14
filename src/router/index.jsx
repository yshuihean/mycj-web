import { createBrowserRouter, Router } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import Home from '@/pages/Home/Home';
import Rooms from '@/pages/Rooms/Rooms';
import RoomDetail from '@/pages/RoomDetail/RoomDetail';
import Scenic from '@/pages/Scenic/Scenic';
import Booking from '@/pages/Booking/Booking';
import Orders from '@/pages/Orders/Orders';
import About from '@/pages/About/About';

export default createBrowserRouter(
    [
        {
            path: '/',
           element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'rooms', element: <Rooms />},
                { path: 'rooms/:id', element: <RoomDetail /> },
                { path: 'scenic', element: <Scenic /> },
                { path: 'booking', element: <Booking /> },
                { path: 'orders', element: <Orders /> },
                { path: 'about', element: <About /> },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);