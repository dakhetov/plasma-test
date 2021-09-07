import { Radiobox, Checkbox, Switch } from '@sberdevices/plasma-ui';
import { typography, headline1 } from '@sberdevices/plasma-tokens';

export const PR_698_PROD = () => (
    <>
        <style>
            {
                `div > *:nth-child(2):not(h1):not(div) {
                    margin-top: 0px !important;
                }`
            }
        </style>
        <h1 style={headline1}>RadioBox</h1>
        <div style={{display: 'inline-flex'}}>
            <Radiobox defaultChecked />
            <Radiobox />
        </div>
        <h1 style={headline1}>Checkbox</h1>
        <div style={{display: 'inline-flex'}}>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked />
        </div>
        <h1 style={headline1}>Switch</h1>
        <div style={{display: 'inline-flex'}}>
            <Switch defaultChecked />
            <Switch />
        </div>
    </>
)