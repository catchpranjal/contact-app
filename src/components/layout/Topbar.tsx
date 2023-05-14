const Topbar = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-8 h-4 flex flex-col justify-between fixed left-5 md:hidden">
        <div className="w-8 bg-white h-[2px]"></div>
        <div className="w-8 bg-white h-[2px]"></div>
        <div className="w-8 bg-white h-[2px]"></div>
      </div>
      <div>Header</div>
    </div>
  );
};

export default Topbar;
