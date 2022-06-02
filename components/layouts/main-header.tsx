import Link from "next/link";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="hidden w-full sm:block sm:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 space-y-2 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/user/bar">
                <span className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                  See user barcharts
                </span>
              </Link>
            </li>
            <li>
              <Link href="/user/table">
                <span className="hover:cursor-pointer block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                  See user table
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
