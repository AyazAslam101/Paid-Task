type Props = {
  children: string;
};
const LeadsCard = ({ children }: Props) => {
  return (
    <div className="w-full bg-white overflow-hidden border border-black">
      <div className="p-4 flex justify-between items-center border-b border-black">
        <h2 className="text-lg font-bold">Ready</h2>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
      <div className="p-4 border-b border-black">
        <p>{children}</p>
      </div>
      <div className="p-4">
        <button className="w-full bg-black text-white py-2 font-semibold rounded-lg">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default LeadsCard;
