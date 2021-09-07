import { App } from '../App';

import { DeviceThemeProvider } from '@sberdevices/plasma-ui/components/Device'; // Типографика, имеющая размеры, зависимые от типа устройства
import { GlobalStyle } from '../GlobalStyle'; // Тема оформления (цветовая схема)

export const Device = () => (
    <DeviceThemeProvider>
        <GlobalStyle />
        <App />
    </DeviceThemeProvider>
)