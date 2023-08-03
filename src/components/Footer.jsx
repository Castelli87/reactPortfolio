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
          2023 Davide Castelli. All rights reserved.
        </span>
      </div>
    </section>
  );
};
export default Footer;


<script type="text/babel">

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

ReactDOM.render(<ContactForm />, document.getElementById("root"));

</script>