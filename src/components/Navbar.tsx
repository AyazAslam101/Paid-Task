import { Search, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-black p-6">
      <div className="text-2xl ml-3 font-semibold">Logo</div>
      <div className="flex items-center space-x-10 pr-8">
        <div className="material-icons cursor-pointer"><Search size={19} color="gray"></Search></div>
        <div className="material-icons cursor-pointer"><UserRound size={19} color="gray"/></div>
      </div>
    </div>
  );
}

export default Navbar;
