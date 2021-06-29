import { Button } from '@sberdevices/plasma-ui';

export const ButtonCust = () => (
    <a href="https://vk.com" style={{textDecoration: 'none'}} target="_blank">
        <Button 
            stretch={false}
            view="primary" 
            type="button"
            //text=""
            //size='s'
            style={{
                display: 'inline-flex', 
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            Подключиться к СберСпасибо
        </Button>
    </a>

);