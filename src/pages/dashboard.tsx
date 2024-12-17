import Card from '../components/Card';
import { Button } from '../components/ui/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { useState } from 'react';
import { useContent } from '../hooks/useContent';
function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <>
      <div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100'>
          <CreateContentModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
          <div className='flex justify-end items-center gap-2'>
            <Button
              variant='secondary'
              text='Share'
              size='md'
              startIcon={<ShareIcon size={'lg'} />}
            />
            <Button
              variant='primary'
              onClick={() => {
                setModalOpen(true);
              }}
              text='Add Content'
              size='md'
              startIcon={<PlusIcon size={'lg'} />}
            />
          </div>

          <div className='flex gap-4'>
            {contents.map(({ type, link, title }) => (
              <Card type={type} link={link} title={title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
// 3:09
