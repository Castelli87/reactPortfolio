import { FiLinkedin, FiGithub, FiArrowUp } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <section>
      <div className="flex justify-end">
        <button onClick={scrollToTop}className="flex md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ">
          <FiArrowUp className=" text-3xl" />
        </button>
      </div>
      <h2 className="text-3xl ">Follow Me</h2>

      <div className="flex justify-center mt-7">
        <a href="https://github.com/Castelli87">
          <FiGithub className="ml-5 text-2xl text-gray-500 hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/davidecastelli87/">
          <FiLinkedin className="ml-5 text-2xl text-gray-500 hover:text-blue-500" />
        </a>
      </div>
      <div className="flex justify-center mt-8  ">
        <FaRegCopyright className="text-md text-gray-500  " />
        <span className="text-sm ml-1">
          2023 Davide Castelli. All right reserved.
        </span>
      </div>
    </section>
  );
};
export default Footer;
