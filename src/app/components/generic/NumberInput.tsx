import React, { useEffect, useState } from 'react';

interface NumberInputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  onChange?: (v: number) => void;
  value: number;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { value } = props;
  const [inputValue, setInputValue] = useState<string>(value.toString() || '');
  const { onChange } = props;

  useEffect(() => {
    // If a new value is passed in as a prop, update the state of this component
    setInputValue(value.toString() || '');
  }, [value]);

  return (
    <input
      type="number"
      className="form-control w-16"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      value={inputValue}
      onChange={(evt) => {
        const valueAsNum = evt.currentTarget.valueAsNumber;
        // Always update the value of this component locally
        setInputValue(evt.currentTarget.value);

        // If it's a valid number (passes local HTML validation), call our onChange
        if (evt.currentTarget.validity.valid && onChange) {
          onChange(valueAsNum);
        }
      }}
    />
  );
};

export default NumberInput;
