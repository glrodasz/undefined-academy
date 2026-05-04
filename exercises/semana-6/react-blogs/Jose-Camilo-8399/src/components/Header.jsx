import { Search } from "./Search";

export const Header = () => {
   return (
      <header className="bg-blueGray-200 w-full text-gray-700 border-t border-gray-100 shadow-sm body-font">
         <div className="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
            <a className="flex items-center mb-4 font-medium text-gray-900 text-2xl title-font md:mb-0">
               <span>José Camilo Blog</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-400 md:mr-auto">
               <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
               <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
               <a href="#_" className="font-medium hover:text-gray-900">Contact</a>
            </nav>
            <Search />
         </div>
      </header>
   );
};