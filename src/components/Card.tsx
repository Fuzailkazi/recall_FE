import { ShareIcon } from '../icons/ShareIcon';

interface CardProps {
  title: string;
  link: string;
  type: 'twitter | youtube';
}

const Card = (props: CardProps) => {
  return (
    <div>
      <div className='bg-white rounded-md border outline-slate-100 p-8 max-w-72 border'>
        <div className='flex justify-between '>
          <div className='flex items-center text-sm'>
            <div className='pr-2 text-gray-500'>
              <ShareIcon size={'lg'} />
            </div>
            {props.title}
          </div>
          <div className='flex justify-between items-center'>
            <div className='pr-2 text-gray-500'>
              <ShareIcon size={'lg'} />
            </div>
            <ShareIcon size={'lg'} />
          </div>
        </div>
        <div className='pt-4'>
          {/* <iframe
            className='w-full'
            src='https://www.youtube.com/embed/4V-l0u_N6Ik?si=kdUb6FbwinMc6a38'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe> */}
          <blockquote className='twitter-tweet'>
            <a href='https://twitter.com/username/status/807811447862468608'></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Card;
