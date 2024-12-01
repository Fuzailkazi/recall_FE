/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  text: string;
  startIcon: any;
  endIcon: any;
  onClick: () => void;
}

export const Button = () => {
  return <button></button>;
};
