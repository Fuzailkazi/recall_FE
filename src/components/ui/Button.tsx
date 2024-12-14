import { ReactElement } from 'react';

type Variant = 'primary' | 'secondary';
export interface ButtonProps {
  variant: Variant;
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary: 'bg-purple-600 text-white',
  secondary: 'bg-purple-300 text-purple-600',
};

const sizeStyles = {
  lg: 'px-8 py-4 text-xl rounded-xl',
  md: 'px-4 py-2 text-md rounded-md',
  sm: 'px-2 py-1 text-sm rounded-sm',
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} flex cursor-pointer ${
        sizeStyles[props.size] +
        `${props.fullWidth ? ' w-full flex justify-center items-center' : ''} ${
          loading ? 'opacity-45' : ''
        }`
      }`}
      disabled={true}
    >
      <div className='flex items-center'>
        {props.startIcon ? (
          <div className='pr-2'> {props.startIcon} </div>
        ) : null}
        <div className='pl-2 pr-2'>{props.text}</div>

        {props.endIcon}
      </div>
    </button>
  );
};
