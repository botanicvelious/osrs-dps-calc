import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface AttributeInputProps {
  name: string;
  image: string | StaticImageData;
  value: number;
  disabled?: boolean;
  onChange?: (v: number) => void;
}

const AttributeInput: React.FC<AttributeInputProps> = (props) => {
  const {name, image, onChange, value, disabled} = props;

  return (
    <div className={'flex items-center'}>
      <div className={'basis-10'}>
        <Image src={image} alt={name} title={name} />
      </div>
      <div className={'basis-12'}>
          {
              disabled ? (
                  <div className={'w-full font-mono text-left py-[.25em] px-[.5em] text-sm border border-zinc-400 rounded cursor-not-allowed'}>
                      {value}
                  </div>
              ) : (
                  <input type={'number'} placeholder={'0'} className={'form-control rounded w-full mt-auto'} onChange={(evt) => {
                      if (onChange) onChange(evt.currentTarget.valueAsNumber);
                  }} value={value} />
              )
          }
      </div>
    </div>
  )
}

export default AttributeInput;