import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes';
import { WpAuthProvider } from './context/wp-auth-context';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <WpAuthProvider>
        <RouterProvider router={Routes} />
    </WpAuthProvider>
);