import { SidebarItem } from './SidebarItem';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { LogoIcon } from '../icons/LogoIcon';
export function Sidebar() {
  return (
    <div className='h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6'>
      <div className='flex text-2xl pl-4 items-center'>
        <div className='pr-4'>
          <LogoIcon size={'lg'} />{' '}
        </div>
        Brainly
      </div>
      <div className='pt-4'>
        <SidebarItem text='Twitter' icon={<TwitterIcon size={'lg'} />} />
        <SidebarItem text='Youtube' icon={<YoutubeIcon size={'lg'} />} />
      </div>
    </div>
  );
}
