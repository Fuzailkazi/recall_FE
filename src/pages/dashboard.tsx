import Card from '../components/Card';
import { Button } from '../components/ui/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { Sidebar } from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';
function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

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
              variant='primary'
              onClick={() => {
                setModalOpen(true);
              }}
              text='Add Content'
              size='md'
              startIcon={<PlusIcon size={'lg'} />}
            />
            <Button
              variant='secondary'
              text='Share'
              size='md'
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                );
                const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                alert(shareUrl);
              }}
              startIcon={<ShareIcon size={'lg'} />}
            />
          </div>

          <div className='flex flex-wrap gap-4'>
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
