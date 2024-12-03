import { CrossIcon } from '../icons/CrossIcon';
import { Button } from './ui/Button';

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className='w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 flex justify-center'>
          <div className='flex flex-col justify-center p-4'>
            <span className='bg-white opacity-100 p-4 rounded-md'>
              <div className='flex justify-end'>
                <div onClick={onClose} className='cursor-pointer'>
                  <CrossIcon size={'lg'} />
                </div>
              </div>
              <div>
                <Input placeholder='Title' />
              </div>
              <div className='flex justify-center '>
                <Button variant='primary' text='Submit' size='md' />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        type={'text'}
        className='px-4 py-2 border rounded m-4'
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}
