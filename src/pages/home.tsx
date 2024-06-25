import Dropdown from "../components/dropdown";
import Footer from "../components/footer";
import LeadsCard from "../components/leadsCard";
import TableComponent from "../components/table";
import TaskCard from "../components/taskCard";

export const Home = () => {
  return (
    <div className="w-full">
      <div className="lg:p-8 md:p-6 p-3">
      <div className="w-full">
        <div className="flex lg:justify-between md:justify-between sm:justify-between justify-start items-center mb-8">
        <h1 className="text-2xl font-normal mr-28">Qualified Leads</h1>
        <Dropdown/>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <LeadsCard>Good to go.</LeadsCard>
          <LeadsCard>
            Looking at othe brands, services, or experiences.
          </LeadsCard>
          <LeadsCard>Needs convincing or concerns.</LeadsCard>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-normal my-8">Task and Reports</h1>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <TaskCard title="Scheduled Meetings" rate="72" button="View Calender">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quod!
          </TaskCard>
          <TaskCard
            title="Potential deal values"
            rate="$1,700,000"
            button="See Details"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quod!
          </TaskCard>
          <TaskCard title="Conversion" rate="94%" button="Explore Details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            quod!
          </TaskCard>
        </div>
      </div>
      <div className="mt-20">
        <TableComponent></TableComponent>
      </div>
      </div>
     <Footer></Footer>
    </div>
  );
};
