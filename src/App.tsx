import Card from './components/Card';
import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  return (
    <>
      <div className='p-4'>
        <div className='flex justify-end items-center gap-2'>
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

        <div className='flex gap-4'>
          <Card
            type='twitter'
            link='https://x.com/fuzailkazi_/status/1844260689369846046'
            title='first'
          />
          <Card
            type='youtube'
            link='https://www.youtube.com/watch?v=Nnop2walGmM&list=RDGMEMCMFH2exzjBeE_zAHHJOdxgVM4V-l0u_N6Ik&index=2'
            title='first'
          />
        </div>
      </div>
    </>
  );
}

export default App;
