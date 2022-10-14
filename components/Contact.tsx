import Link from 'next/link';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiTwitter, SiDiscord } from 'react-icons/si';
import { ContactInfo } from './ContactInfo';

export const Contact = () => {
  const contactInfo: { icon: JSX.Element; name: string }[] = [
    { icon: <MdEmail size={24} />, name: 'Check my resumé!' },
    { icon: <MdPhone size={24} />, name: 'Check my resumé!' },
    { icon: <SiTwitter size={24} />, name: 'Private' },
    { icon: <SiDiscord size={24} />, name: 'Also private' },
  ];

  return (
    <div className='pl-12'>
      <p className='text-gray-200 text-2xl font-semibold mb-2'>Contact</p>
      <div className='flex flex-col gap-2'>
        {/* email
        <div className='flex gap-2'>
          <MdEmail size={24} className='text-gray-200' />
          <Link href='mailto:email@email.com'>
            <a className='text-gray-300'>email@email.com</a>
          </Link>
        </div> */}

        {/* email, twitter, discord, phone */}
        {contactInfo.map((info, i) => (
          <ContactInfo key={i} info={info} />
        ))}
      </div>
    </div>
  );
};
