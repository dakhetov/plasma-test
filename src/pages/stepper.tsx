import { Stepper } from '@sberdevices/plasma-ui';
import { IconMinus, IconClose, IconPlus } from '@sberdevices/plasma-icons';
import { useState } from 'react';

export const StepperCustom = () => {
    const min = 0;
    const max = 5;
    const step = 1;
    const formatter = (val: number) => `${val} \u20BF`;
    const [value, setValue] = useState(3);
    return (
        <Stepper
            step={1}
            value={value}
            min={0}
            max={5}
            showRemove={true}
            pin="circle-circle"
            onChange={(value) => setValue(value)}
            onRemove={() => console.log('onRemove')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            formatter={formatter}
        />
    )
}