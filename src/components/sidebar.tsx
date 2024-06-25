import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from '@headlessui/react';
import {
  BarChart3,
  CircleHelp,
  House,
  NotepadText,
  Settings,
  TrendingUp,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="relative md:flex md:flex-shrink-0 border-r-[1px] border-black pt-8">
      <Button
        className={`fixed top-5 right-1 z-50 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-md shadow-md ${isOpen ? 'hidden' : 'lg:hidden md:hidden block'}`}
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform ${
          isOpen ? "translate-x-0 py-14 z-10" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex-shrink-0`}
      >
        <nav className="flex flex-col h-full overflow-y-auto" style={{ zIndex: 999 }}>
          <div className="px-4 pt-1">
            {isOpen && (
              <>
              <Button className="fixed top-4 right-1" onClick={handleOverlayClick}>
                <X/>
              </Button>
              </>
            )} 
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
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
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <TrendingUp size={19} />
                  <span className="ml-4 text-sm">Trends</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/campaigns"
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <BarChart3 size={19} />
                  <span className="ml-4 text-sm">Live Campaigns</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <NotepadText size={19} />
                  <span className="ml-4 text-sm">Reports</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="p-4 pb-0 pt-0">
            <div className="text-md my-2">SETTINGS</div>
            <ul>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <CircleHelp size={19} />
                  <span className="ml-4 text-sm">Support</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center p-2 hover:bg-gray-300 ${
                      isActive && "bg-gray-300"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <Settings size={19} />
                  <span className="ml-4 text-sm">Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      {isOpen && (
        <div
          className="fixed top-0 right-1 h-full bg-black opacity-50 md:hidden z-index-1"
          onClick={handleOverlayClick}
          style={{ zIndex: 999 }}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
