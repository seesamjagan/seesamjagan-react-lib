import React from 'react';
import './spinner.css';

export const SpinnerSize = {
    XSMALL: 'xsmall',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
};

export const Spinner = ({size='xsmall'}) => <div className={"spinner spinner-"+size}></div>

export default Spinner;