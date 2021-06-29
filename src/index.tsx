import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device'; // Типографика, имеющая размеры, зависимые от типа устройства
import { GlobalStyle } from './GlobalStyle'; // Тема оформления (цветовая схема)

ReactDOM.render(
    <DeviceThemeProvider>
        <GlobalStyle />
        <App />
    </DeviceThemeProvider>,
    document.getElementById('root'),
);