import { FunFact } from './FunFact';

export const FunFacts = () => {
  const funFacts: string[] = [
    'Reached Immortal 2 in VALORANT',
    'Reached Legend in Hearthstone',
    'New Yorker',
  ];
  return (
    <div className='px-12 2xl:pr-0'>
      <p className='text-gray-200 text-2xl font-semibold mb-2'>Fun Facts</p>
      <div className='flex flex-col gap-2'>
        <p className='text-gray-300'>
          If you&apos;re interested, here&apos;s a little more about me:
        </p>

        {funFacts.map((fact, i) => (
          <FunFact key={i} fact={fact} />
        ))}
      </div>
    </div>
  );
};
