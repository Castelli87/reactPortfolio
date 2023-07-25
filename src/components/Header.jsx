const Header = () => {
  return (
    <header className="flex justify-between bg-primary ">
      <a href="/" className="">
        Logo
      </a>
      <nav >
        <ul className="flex justify-between">
          <li>
            <a href="/#AboutMe" className="p-2 m-2 text-gray-600	hover:text-black hover:underline ">About</a>
          </li>
          <li>
            <a href="/#Projects" className="p-2 m-2 text-gray-600	hover:text-black hover:underline">Projects</a>
          </li>
          <li>
            <a href="/#Contact" className="p-2 m-2 text-gray-600	hover:text-black hover:underline">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
