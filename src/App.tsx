// App.tsx
import { useState } from 'react';
//import styled from 'styled-components';

import { Container } from '@sberdevices/plasma-ui/components/Grid';
import { Button, TextField, Row, Col, Header, TextBox } from '@sberdevices/plasma-ui';
import { IconMic } from '@sberdevices/plasma-icons';
import { ButtonCust } from './components/Button';

export const App = () => {
    const [value, setValue] = useState('');
    const [valueTextBox, setValueTextBox] = useState('');
    
    return (
        <Button
          text={'Hello Plasma'}
          size={'m'}
          view={'primary'}
          pin={'square-square'}
          contentLeft={<IconMic size="s" color="inherit" />}
          scaleOnInteraction={true}
          outlined={true}
          focused={false}
          disabled={false}
          square={false}
          stretch={false}
        />
    );
};