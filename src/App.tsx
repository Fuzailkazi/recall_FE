import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';

function App() {
  return (
    <>
      <Button
        variant='primary'
        text='Click'
        size='md'
        startIcon={<PlusIcon />}
      />
      <Button variant='secondary' text='Click' size='lg' />
    </>
  );
}

export default App;
