import { Button } from '@headlessui/react';

type Props = {
  title: string;
  rate: string;
  children: string;
  button: string;
};

const TaskCard = ({ title, rate, children, button }: Props) => {
  return (
    <div className="md:max-w-md lg:max-w-lg xl:max-w-xl bg-white overflow-hidden border border-black shadow-md rounded-lg my-4">
      <div className="p-4 flex items-center">
        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <div className="ml-4">
          <h2 className="text-md font-normal">{title}</h2>
          <p className="text-4xl font-normal">{rate}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm font-normal">
          {children}
        </p>
      </div>
      <div className="p-4">
        <Button className="w-full bg-white border border-black rounded-md py-2 px-4 text-black font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
          {button}
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
