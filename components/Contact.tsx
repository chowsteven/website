import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiTwitter, SiDiscord } from 'react-icons/si';

export const Contact = () => {
  return (
    <div className='pl-12'>
      <p className='text-2xl font-semibold mb-2'>Contact</p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
          <MdEmail size={24} />
          <Link href='mailto:email@email.com'>email@email.com</Link>
        </div>
        <div className='flex gap-2'>
          <SiTwitter size={24} />
          Private!
        </div>
        <div className='flex gap-2'>
          <SiDiscord size={24} />
          Private!
        </div>
        <div className='flex gap-2'>
          <MdPhone size={24} />
          Very private!
        </div>
      </div>
    </div>
  );
};
