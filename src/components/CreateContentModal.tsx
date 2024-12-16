import { CrossIcon } from '../icons/CrossIcon';
import { Button } from './ui/Button';
import { Input } from './Input';
import { useRef, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

enum ContentType {
  YouTube = 'youtube',
  Twitter = 'twitter',
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.YouTube);
  const api = axios.create({
    baseURL: BACKEND_URL,
  });
  async function addContent() {
    const title = titleRef?.current?.value;
    const link = linkRef?.current?.value;

    await api.post(
      `${BACKEND_URL}/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );
  }
  return (
    <div>
      {open && (
        <div>
          <div className='w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center'></div>
          <div className='w-screen h-screen fixed top-0 left-0  flex justify-center'>
            <div className='flex flex-col justify-center p-4'>
              <span className='bg-white  p-4 rounded-md z-10'>
                <div className='flex justify-end'>
                  <div onClick={onClose} className='cursor-pointer'>
                    <CrossIcon size={'lg'} />
                  </div>
                </div>
                <div>
                  <Input reference={titleRef} placeholder='Title' />
                  <Input reference={linkRef} placeholder='Link' />
                </div>
                <div>
                  <h1>Type</h1>
                  <div className='flex justify-center items-center gap-1 p-4 rounded-md m-2'>
                    <Button
                      text='Youtube'
                      variant={
                        type === ContentType.YouTube ? 'primary' : 'secondary'
                      }
                      onClick={() => {
                        setType(ContentType.YouTube);
                      }}
                      size='sm'
                    />
                    <Button
                      text='Twitter'
                      variant={
                        type === ContentType.Twitter ? 'primary' : 'secondary'
                      }
                      onClick={() => {
                        setType(ContentType.Twitter);
                      }}
                      size='sm'
                    />
                  </div>
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
        </div>
      )}
    </div>
  );
}
