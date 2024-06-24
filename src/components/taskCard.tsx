type Props = {
  title: string;
  rate: string;
  children: string;
  button: string;
};

const TaskCard = ({ title, rate, children, button }: Props) => {
  return (
    <div className="w-full bg-white overflow-hidden border border-black">
      <div className="p-4 flex items-center">
        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
        <div className="ml-4">
          <h2 className="text-lg">{title}</h2>
          <p className="text-4xl">{rate}</p>
        </div>
      </div>
      <div className="p-4">
        <p>
          {children}
        </p>
      </div>
      <div className="p-4">
        <button className="w-full bg-white border border-black rounded-md py-2 text-black font-semibold hover:bg-gray-100">
        {button}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
