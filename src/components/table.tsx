const tableData = [
  { name: 'Full name', company: 'Company name', number: '(480) 555-0103', personas: 'Team name', date: 'Nov 24, 2050',view:'View' },
  { name: 'Full name', company: 'Company name', number: '(239) 555-0108', personas: 'Team name', date: 'Jan 24, 2050',view:'View'  },
  { name: 'Full name', company: 'Company name', number: '(239) 555-0108', personas: 'Team name', date: 'Jan 24, 2050',view:'View' },
  { name: 'Campaign Name', company: '', number: '', personas: '', date: '' },
  { name: 'Full name', company: 'Company name', number: '(480) 555-0103', personas: 'Team name', date: 'Nov 24, 2050',view:'View'  },
  { name: 'Full name', company: 'Company name', number: '(239) 555-0108', personas: 'Team name', date: 'Jan 24, 2050',view:'View'  },
  { name: 'Full name', company: 'Company name', number: '(239) 555-0108', personas: 'Team name', date: 'Jan 24, 2050',view:'View'  },
];

const TableComponent = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full max-w-5xl border border-black mx-auto">
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
          {tableData.map((row, index) => (
            <tr key={index} className={`border border-black ${index === 3? 'bg-gray-200' : ''}`}>
              <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">{row.name}</td>
              <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none">{row.company}</td>
              <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none">{row.number}</td>
              <td className="hidden sm:table-cell px-4 py-3 sm:py-4 text-left border-none">{row.personas}</td>
              <td className="px-4 py-3 sm:py-4 text-left border-none">{row.date}</td>
              <td className="px-4 py-3 sm:py-4 text-left border-none font-semibold">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
