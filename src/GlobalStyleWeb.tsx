import { createGlobalStyle } from 'styled-components';
import { web } from '@sberdevices/plasma-tokens-web/typo';
import { light } from '@sberdevices/plasma-tokens-web/themes';
import {
    text, // Цвет текста
    background, // Цвет подложки
    gradient, // Градиент
} from '@sberdevices/plasma-tokens-web';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
    }
`;
const ThemeStyle = createGlobalStyle(light);
const TypoStyle = createGlobalStyle(web);

export const GlobalStyleWeb = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
        <TypoStyle />
    </>
);