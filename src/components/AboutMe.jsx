import me from '../assets/Images/personal1.jpg'



const AboutMe = () => {
  return (
    <section className="mx-auto px-10 " id="About">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid lg:grid-cols-2 items-center ">
        <div className=" ">
          <h1 className="text-3xl font-bold mb-6 text-left">About</h1>
          <p className="text-sm text-left tracking-tight font-serif font-Lora mt-2">Hello! I'm Davide, </p>
          <p className="text-sm text-left tracking-tight font-serif font-Lora">
            a junior full stack developer with a passion for building dynamic
            and user-centric applications.
          </p>

          <p className="text-sm  text-left tracking-tight font-Lora mt-2">
            With a solid understanding of web development and a diverse tech
            stack, I strive to create seamless experiences for users while
            constantly expanding my knowledge. In my journey as a developer, I
            have gained experience working with technologies such as Express,
            PostgreSQL, MongoDB, Jest, React, and React Native.
          </p>
          <p className="text-sm text-left tracking-tight font-serif mt-2 font-Lora">
            Leveraging these tools,
          </p>
          <p className="text-sm text-left tracking-tight font-serif font-Lora">
            I have developed a range of projects that showcase my ability to
            build efficient and scalable applications.
          </p>
          <p className="text-sm text-left tracking-tight font-serif mt-2 font-Lora">
            I invite you to explore my portfolio, where you'll find a collection
            of projects that demonstrate my technical capabilities and creative
            problem-solving.
          </p>
          <p className="text-sm text-left tracking-tight font-serif font-Lora mt-2">
            Each project represents a milestone in my journey as a developer,
            highlighting my ability to apply the technologies I know to
            real-world scenarios.
          </p>
          <div className="flex my-3">
            <button className="text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              <a href="/#Projects">Projects</a>
            </button>
          </div>
        </div>
        <img src={me} className='object-scale-down h-80 w-96 sm:mx-auto' ></img>
      </div>
      <div className=" items-start md:flex ">
        <p className="text-sm text-left tracking-tight font-serif font-Lora mt-2 mb-10">
          If you have any inquiries or would like to discuss potential
          opportunities, please feel free to reach out to me through the contact
          information provided below. I'm excited to connect with like-minded
          individuals and collaborate on exciting projects.
        </p>
        <button className="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ">
          <a href="/#Contact">Contact</a>
        </button>
      </div>
      <hr className="h-px my-12 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default AboutMe;
