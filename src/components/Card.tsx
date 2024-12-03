import { ShareIcon } from '../icons/ShareIcon';

interface CardProps {
  title: string;
  link: string;
  type: 'twitter' | 'youtube';
}

const Card = ({ type, link, title }: CardProps) => {
  return (
    <div>
      <div className='bg-white rounded-md border outline-slate-100 p-8 max-w-72 border'>
        <div className='flex justify-between '>
          <div className='flex items-center text-sm'>
            <div className='pr-2 text-gray-500'>
              <ShareIcon size={'lg'} />
            </div>
            {title}
          </div>
          <div className='flex justify-between items-center'>
            <div className='pr-2 text-gray-500'>
              <ShareIcon size={'lg'} />
            </div>
            <div className='pr-2'>
              <a href={link} target='_blank'>
                <ShareIcon size={'lg'} />
              </a>
            </div>
          </div>
        </div>
        <div className='pt-4'>
          {type === 'youtube' && (
            <iframe
              className='w-full'
              src={link.replace('watch', 'embed')}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          )}
          {type === 'twitter' && (
            <blockquote className='twitter-tweet'>
              <a href={link.replace('x.com', 'twitter.com')}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
