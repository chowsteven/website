export interface TechnologyProps {
  name: string;
  icon: JSX.Element;
}

export const Technology = ({ name, icon }: TechnologyProps) => {
  return (
    <li className='flex items-center gap-2 w-32'>
      <span className='text-gray-200'>{icon}</span>
      <span className='text-gray-300'>{name}</span>
    </li>
  );
};
