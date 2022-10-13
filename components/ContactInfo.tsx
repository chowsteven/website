interface ContactInfoProps {
  info: {
    icon: JSX.Element;
    name: string;
  };
}

export const ContactInfo = ({ info }: ContactInfoProps) => {
  return (
    <div className='flex gap-2'>
      <div className='text-gray-200'>{info.icon}</div>
      <div className='text-gray-300'>{info.name}</div>
    </div>
  );
};
