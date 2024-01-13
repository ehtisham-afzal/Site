const NaveBarSkeleton = () => {
  return (
    <nav className="container mt-8 flex h-16 w-full items-center justify-between rounded-2xl border-[1px] border-primary/30 bg-primary px-4 backdrop-blur-sm dark:border-primary/30">
      <ul className="flex items-center justify-between gap-4">
        <li className="group bg-secondary/5 rounded-lg  text-light-gray "></li>
        <li className="group bg-secondary/5 rounded-lg  text-light-gray"></li>
        <li className="group bg-secondary/5 rounded-lg  text-light-gray "></li>
        <li className="group bg-secondary/5 rounded-lg  text-light-gray "></li>
        <li className="group bg-secondary/5 rounded-lg  text-light-gray"></li>
        <li className="group bg-secondary/5 rounded-lg  text-light-gray"></li>
      </ul>
    </nav>
  );
};

export default NaveBarSkeleton;
