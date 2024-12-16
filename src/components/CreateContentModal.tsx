import { CrossIcon } from '../icons/CrossIcon';
import { Button } from './ui/Button';
import { Input } from './Input';
import { useRef } from 'react';

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  function addContent() {
    const title = titleRef?.current.value;
    const link = linkRef?.current.value;
  }
  return (
    <div>
      {open && (
        <div className='w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-90 flex justify-center'>
          <div className='flex flex-col justify-center p-4'>
            <span className='bg-white opacity-100 p-4 rounded-md z-10'>
              <div className='flex justify-end'>
                <div onClick={onClose} className='cursor-pointer'>
                  <CrossIcon size={'lg'} />
                </div>
              </div>
              <div>
                <Input reference={titleRef} placeholder='Title' />
                <Input reference={linkRef} placeholder='Link' />
              </div>
              <div className='flex justify-center '>
                <Button
                  onClick={addContent}
                  variant='primary'
                  text='Submit'
                  size='md'
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
