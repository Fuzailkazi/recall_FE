interface InputProps {
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: any;
}

export function Input({ placeholder, reference }: InputProps) {
  return (
    <div>
      <input
        type={'text'}
        className='px-4 py-2 border rounded m-4'
        ref={reference}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
