import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StyledEngineProvider injectFirst>
        <React.StrictMode>
            <Routing />
        </React.StrictMode>
    </StyledEngineProvider>
);
