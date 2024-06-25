const Footer = () => {
  return (
    <footer className="bg-[#434345] text-white py-7 px-8">
      <div className="container mx-auto flex md:flex-rows justify-between items-center">
        <div>
          <a href="#" className="text-white hover:underline">Send us Feedback</a>
        </div>
        <div className="flex space-x-4 items-center !text-md">
          <a href="#" className="text-white hover:underline">Regulatory Terms</a>
          <a href="#" className="text-white hover:underline">Non Discrimination</a>
          <a href="#" className="text-white hover:underline">Trust Centre</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white hover:underline">Terms of Use</a>
          <a href="#" className="text-white hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
