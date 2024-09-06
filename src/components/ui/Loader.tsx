const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a]">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-transparent opacity-30 animate-ping"></div>
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-transparent border-t-orange-500 border-b-gray-800 shadow-lg"></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#262626] to-[#333333] shadow-inner"></div>
        <div className="absolute inset-7 rounded-full bg-orange-500 shadow-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
