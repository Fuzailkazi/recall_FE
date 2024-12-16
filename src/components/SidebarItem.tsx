import { ReactElement } from 'react';

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className='flex text-gray-700 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-2 transition-all duration-150'>
      <div className='p-4'>{icon}</div>
      <div className='p-4'>{text}</div>
    </div>
  );
}
