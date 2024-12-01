import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  return (
    <>
      <Button
        variant='primary'
        text='Click'
        size='md'
        startIcon={<PlusIcon size={'lg'} />}
      />
      <Button
        variant='secondary'
        text='Click'
        size='md'
        startIcon={<ShareIcon size={'lg'} />}
      />
    </>
  );
}

export default App;
