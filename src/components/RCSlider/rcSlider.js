import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

const marks = {
    0: '0',
    // 5: '5',
    // 10: '10',
    // 15: '15',
    // 20: '20',
    // 25: '25',
    // 30: '30',
    35: '35'
};

class MyRange extends React.Component {
    render() {
        return (
            <Range min={0} max={35} defaultValue={[0, 35]} marks={marks} step={5} />
        );
    }
}

export default MyRange;