import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

const NumberFormatter: React.FC<NumberFormatProps> = (props) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {

                onChange!({
                    target: {
                        value: values.floatValue,
                    },
                } as any)
            }}
            thousandSeparator
            allowLeadingZeros={false}
            isNumericString
            prefix="$"
        />
    );
}

export default NumberFormatter;