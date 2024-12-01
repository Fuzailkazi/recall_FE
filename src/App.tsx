import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  return (
    <>
      <div className='flex flex-row'>
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
