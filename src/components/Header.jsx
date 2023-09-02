import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiMoon, FiSun } from 'react-icons/fi';
import logoLight from '../assets/Images/Logo1.svg'
import logoDark from '../assets/Images/Logo2.svg'


const Header = ({theme,setTheme}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

 

  const onChange = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('dark')
  };

  return (
    <header className="flex justify-between  p-4 ">
      <a href="/" className="">
        {theme === 'dark'?(<img className="w-16" src = {logoLight }alt="" />):(<img className="w-16" src={logoDark} alt="" />)}

      </a>
      <nav className="hidden md:block " >
        <ul className=" flex items-center justify-between">
          <li>
            <a href="/#About" className="p-2 m-2 text-gray-600 text-lg text-lg font-semibold	font-sans hover:text-black hover:underline dark:bg-slate-800 dark:text-white">About</a>
          </li>
          <li>
            <a href="/#Projects" className="p-2 m-2 text-gray-600 text-lg font-semibold	font-sans	hover:text-black hover:underline dark:bg-slate-800 dark:text-white">Projects</a>
          </li>
          <li>
            <a href="/#Contact" className="p-2 m-2 text-gray-600 text-lg font-semibold	font-sans	hover:text-black hover:underline dark:bg-slate-800 dark:text-white">Contact</a>
          </li>
          <li>
            <button  onClick={onChange} className="p-2 m-2 text-lg font-semibold	font-sans text-gray-600 focus:outline-none bg-white rounded  hover:bg-gray-100 hover:text-black focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >{theme === 'light' ?(<FiSun/>):(<FiMoon/>)}</button>
          </li>
        </ul>
      </nav>

      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className=" block ">
          <li>
            <a onClick={handleToggle} href="/#About" className="p-2 m-2 text-gray-600	text-sm  font-semibold	font-sans hover:text-black hover:underline dark:bg-slate-800 dark:text-white">About</a>
          </li>
          <li>
            <a onClick={handleToggle}  href="/#Projects" className="p-2 m-2 text-gray-600	text-sm font-semibold	font-sans hover:text-black hover:underline dark:bg-slate-800 dark:text-white">Projects</a>
          </li>
          <li>
            <a onClick={handleToggle}  href="/#Contact" className="p-2 m-2 text-gray-600	text-sm font-semibold	font-sans hover:text-black hover:underline dark:bg-slate-800 dark:text-white">Contactsss</a>
          </li>
          <li>
            <button  onClick={onChange} className="p-2 m-2 text-lg font-semibold	font-sans text-gray-600 focus:outline-none bg-white rounded  hover:bg-gray-100 hover:text-black focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >{theme === 'light' ?(<FiSun/>):(<FiMoon/>)}</button>
          </li>
        </ul>
      </nav>
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
