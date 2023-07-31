import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <h2 className="text-3xl ">Follow Me</h2>
      <div className="flex justify-center mt-7">
        <a href="https://github.com/Castelli87" >
          <FiGithub className="ml-5 text-2xl text-gray-500 hover:text-indigo-700" />
        </a>
        <a href="https://www.linkedin.com/in/davidecastelli87/">
          <FiLinkedin className="ml-5 text-2xl text-gray-500 hover:text-indigo-700" />
        </a>
      </div>
      <div className="flex justify-center mt-8  ">
        <FaRegCopyright className="text-md text-gray-600  " />
        <span className="text-sm ml-1">2023 Davide Castelli. All right reserved.</span>
      </div>
    </section>
  );
};
export default Footer;
