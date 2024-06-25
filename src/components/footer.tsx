const Footer = () => {
  return (
    <footer className="bg-[#434345] text-white py-7 px-8">
      <div className="container mx-auto max-w-screen-lg flex lg:flex-col md:flex-col flex-row justify-between items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <a href="#" className="text-white hover:underline">Send us Feedback</a>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center text-center md:text-left !text-md">
          <a href="#" className="text-white hover:underline">Regulatory Terms</a>
          <a href="#" className="text-white hover:underline">Non Discrimination</a>
          <a href="#" className="text-white hover:underline">Trust Centre</a>
          <span className="text-white hidden md:inline">|</span>
          <a href="#" className="text-white hover:underline">Terms of Use</a>
          <a href="#" className="text-white hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
