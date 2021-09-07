import { Checkbox } from '@sberdevices/plasma-web';

export const PR_698_WEB = () => (
    <>
        <style>
            {
                `div > *:nth-child(2):not(h1):not(div) {
                    margin-top: 0px !important;
                }`
            }
        </style>
        <h1>RadioBox</h1>
        <div style={{display: 'inline-flex'}}>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked />
        </div>
    </>
);