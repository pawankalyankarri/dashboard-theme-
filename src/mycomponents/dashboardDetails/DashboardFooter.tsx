const DashboardFooter = () => {
  return (
    <div className="text-gray-500 grid grid-cols-3   w-full  p-5">
      <div className="w-full col-span-2 pl-5">
        <span>
          © 2025, made with by
          <span className="font-bold text-gray-600">Creative Tim</span> for a
          better web.
        </span>
      </div>
      <div>
        <ul className="flex gap-5 w-full">
            <li className="cursor-pointer">Creative Tim</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">License</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardFooter;
