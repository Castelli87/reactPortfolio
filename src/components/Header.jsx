import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between  p-4 ">
      <a href="/" className="">
        <img className="w-16" src="../src/assets/Images/Logo2.svg" alt="" />
      </a>
      <nav className="hidden md:block " >
        <ul className=" flex">
          <li>
            <a href="/#AboutMe" className="p-2 m-2 text-gray-600 text-lg text-lg font-semibold	font-sans hover:text-black hover:underline ">About</a>
          </li>
          <li>
            <a href="/#Projects" className="p-2 m-2 text-gray-600 text-lg font-semibold	font-sans	hover:text-black hover:underline">Projects</a>
          </li>
          <li>
            <a href="/#Contact" className="p-2 m-2 text-gray-600 text-lg font-semibold	font-sans	hover:text-black hover:underline">Contact</a>
          </li>
        </ul>
      </nav>

      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className=" block ">
          <li>
            <a href="/#AboutMe" className="p-2 m-2 text-gray-600	text-sm  font-semibold	font-sans hover:text-black hover:underline ">About</a>
          </li>
          <li>
            <a href="/#Projects" className="p-2 m-2 text-gray-600	text-sm font-semibold	font-sans hover:text-black hover:underline">Projects</a>
          </li>
          <li>
            <a href="/#Contact" className="p-2 m-2 text-gray-600	text-sm font-semibold	font-sans hover:text-black hover:underline">Contact</a>
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
