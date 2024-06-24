import { NavLink } from "react-router-dom";
import {
  BarChart3,
  CircleHelp,
  House,
  NotepadText,
  Settings,
  TrendingUp,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-80 flex flex-col border-r-[1px] border-black p-6">
      <nav className="flex-1">
        <div className="p-4 pb-0 ">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <House size={19} />
                <span className="ml-4 text-sm">Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="p-4 pb-0 pt-0">
          <div className="text-md my-2">CLIENT MANAGEMENT</div>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/trends"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <TrendingUp size={19} />
                <span className="ml-4 text-sm">Trends</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/campaigns"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <BarChart3 size={19} />
                <span className="ml-4 text-sm">Live Campaigns</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <NotepadText size={19} />
                <span className="ml-4 text-sm">Reports</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="p-4 pb-0">
          <div className="text-md my-2">SETTINGS</div>
          <ul>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <CircleHelp size={19} />
                <span className="ml-4 text-sm">Support</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center hover:cursor-pointer p-2 hover:bg-gray-300 ${
                    isActive && "bg-gray-300" 
                  }`
                }
              >
                <Settings size={19} />
                <span className="ml-4 text-sm">Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
