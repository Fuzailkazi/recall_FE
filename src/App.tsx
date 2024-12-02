import Card from './components/Card';
import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  return (
    <>
      <div className='flex flex-row  justify-end items-center'>
        <Button
          variant='secondary'
          text='Share'
          size='md'
          startIcon={<ShareIcon size={'lg'} />}
        />
        <Button
          variant='primary'
          text='Add Content'
          size='md'
          startIcon={<PlusIcon size={'lg'} />}
        />
      </div>
      <Card />
    </>
  );
}

export default App;
