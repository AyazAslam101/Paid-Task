const TableComponent = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-4 py-3 sm:py-4 text-left border-none text-lg sm:text-xl font-medium">Live Campaigns</th>
          </tr>
          <tr className="border border-black">
            <th className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base">Name</th>
            <th className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base">Company</th>
            <th className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base">Number</th>
            <th className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base">Personas</th>
            <th className="px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base">
              Date <span>&#8595;</span>
            </th>
            <th className="px-4 py-3 sm:py-4 text-left border-none text-sm sm:text-base"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200 border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Campaign Name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Pause Campaign</td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(480) 555-0103</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Nov 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(239) 555-0108</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Jan 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(239) 555-0108</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Jan 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
          <tr className="bg-gray-200 border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Campaign Name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="px-4 py-3 sm:py-4 text-left border-none "></td>
            <td className="px-4 py-3 sm:py-4 text-left border-none "></td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(480) 555-0103</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Nov 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(239) 555-0108</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Jan 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
          <tr className="border border-black">
            <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">Full name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Company name</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">(239) 555-0108</td>
            <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none ">Team name</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">Jan 24, 2050</td>
            <td className="px-4 py-3 sm:py-4 text-left border-none ">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
