import { GiCircleClaws } from 'react-icons/gi';

interface FunFactProps {
  fact: string;
}

export const FunFact = ({ fact }: FunFactProps) => {
  return (
    <div className='flex items-center gap-1'>
      <GiCircleClaws className='text-gray-200' />
      <span className='text-gray-300'>{fact}</span>
    </div>
  );
};
