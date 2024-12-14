import { ReactElement } from 'react';

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className='flex text-gray-700 cursor-pointer hover:bg-gray-200 rounded max0w48 pl-4 transition-all duration-150'>
      <div className='p-4'>{icon}</div>
      <div className='p-4'>{text}</div>
    </div>
  );
}
