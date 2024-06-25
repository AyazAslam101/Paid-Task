import { Button } from '@headlessui/react';

type Props = {
  children: string;
};
const LeadsCard = ({ children }: Props) => {
  return (
    <div className="w-full w-[364px] bg-white overflow-hidden border border-black">
      <div className="p-4 flex justify-between items-center border-b border-black">
        <h2 className="text-md font-bold">Ready</h2>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
      <div className="p-4">
        <p className='text-md'>{children}</p>
      </div>
      <div className="p-4">
      <Button className="w-full bg-black text-white py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          Purchases
        </Button>
      </div>
    </div>
  );
};

export default LeadsCard;
