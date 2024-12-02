import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  return (
    <>
      <div className='flex flex-row  justify-end items-center'>
        <Button
          variant='secondary'
          text='Click'
          size='md'
          startIcon={<ShareIcon size={'lg'} />}
        />
        <Button
          variant='primary'
          text='Click'
          size='md'
          startIcon={<PlusIcon size={'lg'} />}
        />
      </div>
    </>
  );
}

export default App;
