const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white hover:underline">Send us Feedback</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline">Regulatory Terms</a>
          <a href="#" className="text-white hover:underline">Non Discrimination</a>
          <a href="#" className="text-white hover:underline">Trust Centre</a>
          <span>|</span>
          <a href="#" className="text-white hover:underline">Terms of Use</a>
          <a href="#" className="text-white hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
