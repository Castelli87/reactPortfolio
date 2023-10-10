import React, { useRef } from "react";
import { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Concacts() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const [errorName, setErrorName] = useState(false);
  // const [errorEmail, setErrorEmail] = useState(false);
  // const [errorSubject, setErrorSubject] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleToggle = () => setFormSubmitted(!formSubmitted);

  const [msg, setMsg] = useState(
    `Please make sure you enter valid information.
    The field should contain characters, not just white spaces.
    Please correct your entry and try again.`
  );

  const form = useRef();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (message.length === 0 || message.trim() === "") {
      setErrorMessage(true);
 
    } else {
      setFormSubmitted(true);
      setErrorMessage(false);

      
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          fullname,
          email,
          message,
          subject,
        }),
      })
      .then(() => {
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => console.log(error));
    }

    emailjs.send("service_db6fbsm", "Contact_template", form.current, "9aqS3rPNZD1N1kHb6")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  
  
  return (
    <div className="px-10">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <section className=" grid md:grid-cols-2 gap-10  " id="Contact">
        <form
          className="form"
          name="contact"
          netlify
          ref={form}
          onSubmit={handleSubmit}
        >
          <h2 className="font-general-medium text-2xl  mt-12 mb-8">
            Contact Form
          </h2>
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white dark:bg-slate-800 "
            >
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              placeholder="Your Name"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white "
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              placeholder="Subject"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Please leave your message here.... "
            ></textarea>
            {errorMessage ? (
              <div className=" mt-3 rounded-2xl border-solid  border-2 border-red-500 flex gap-2">
                <h2 className="  m-4 c text-xl text-red-500">{msg}</h2>{" "}
              </div>
            ) : (
              <p></p>
            )}
          </div>
          {formSubmitted ? (
            <div className=" mt-3 p-2  rounded-xl border-solid  border-2 border-blue-500 flex justify-between">
              <h3 className=" text-xl ">
                Thank you for submitting your form! Your information has been
                received successfully. We'll get back to you as soon as
                possible.{" "}
              </h3>
              <span onClick={handleToggle} className="text-2xl cursor-pointer">
                X
              </span>
            </div>
          ) : (
            <p></p>
          )}
          <button
            type="submit"
            className="flex my-3 md: md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Submit
          </button>
        </form>

        <section className="w-full lg:w-1/2 ">
          <div className="text-left max-w-xl px-6 ">
            <h2 className="font-general-medium text-2xl  mt-12 mb-8">
              Contact details
            </h2>
            <ul className="font-general-regular">
              <li className="flex ">
                <i className="text-xl text-gray-500 dark:text-gray-400 mr-2">
                  <FiMapPin></FiMapPin>
                </i>
                <span className=" mb-4 ">Liverpool</span>
              </li>
              <li className="flex ">
                <i className="text-xl text-gray-500 dark:text-gray-400 mr-2">
                  <FiMail></FiMail>
                </i>
                <span className="text-md mb-4 ">
                  davidecastelli87@hotmail.com
                </span>
              </li>
              <li className="flex ">
                <i className="text-xl text-gray-500 dark:text-gray-400 mr-2">
                  <FiPhone></FiPhone>
                </i>
                <span className="text-md mb-4 ">07517346620</span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
}
