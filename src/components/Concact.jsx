import { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const Concacts = () => {
  const initialValues = {
    fullname:'',
    email:'',
    subject:'',
    message:''
  }

const [inputValues,setInputValues]= useState(initialValues)

const handleSubmit=(event)=>{
  event.preventDefault()
  console.log(inputValues)
  setInputValues(initialValues)
}
  const  handleChange = (event) =>{
    const{name,value}=event.target
    setInputValues({...inputValues,[name]:value})
  }



  return (
    <div>

    
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" ></hr>
    <section className="container grid md:grid-cols-2 gap-10  " id="Contact">
      <form className="form  " onSubmit={handleSubmit} >
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
            value={inputValues.fullname}
            onChange={handleChange}
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
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="email"
            value={inputValues.email}
            onChange={handleChange}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name="subject"
            value={inputValues.subject}
            required
            onChange={handleChange}
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
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Please leave your message here.... "
            onChange={handleChange}
            name="message"
            value={inputValues.message}
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
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
              <span className="text-md mb-4 ">davidecastelli87@hotmail.com</span>
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
};
export default Concacts;
