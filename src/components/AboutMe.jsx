const AboutMe = () => {
  return (
    <section className="container mx-auto" id="About">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid lg:grid-cols-2 items-center ">
        <div>
          <h1 className="text-3xl font-bold  text-center">About</h1>
          <p className="text-sm text-left tracking-tight font-serif mt-2">Hello! I'm Davide, </p>
          <p className="text-sm text-left tracking-tight font-serif ">
            a junior full stack developer with a passion for building dynamic
            and user-centric applications.
          </p>

          <p className="text-sm text-left tracking-tight font-serif mt-2">
            With a solid understanding of web development and a diverse tech
            stack, I strive to create seamless experiences for users while
            constantly expanding my knowledge. In my journey as a developer, I
            have gained experience working with technologies such as Express,
            PostgreSQL, MongoDB, Jest, React, and React Native.
          </p>
          <p className="text-sm text-left tracking-tight font-serif mt-2 ">
            Leveraging these tools,
          </p>
          <p className="text-sm text-left tracking-tight font-serif ">
            I have developed a range of projects that showcase my ability to
            build efficient and scalable applications.
          </p>
          <p className="text-sm text-left tracking-tight font-serif mt-2">
            I invite you to explore my portfolio, where you'll find a collection
            of projects that demonstrate my technical capabilities and creative
            problem-solving.
          </p>
          <p className="text-sm text-left tracking-tight font-serif mt-2">
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
        <img src='../src/assets/Images/personal.jpg ' className='m-auto my-5' ></img>
      </div>
      <div className=" items-start md:flex  ">
        <p className="text-sm text-left tracking-tight font-serif mt-2">
          If you have any inquiries or would like to discuss potential
          opportunities, please feel free to reach out to me through the contact
          information provided below. I'm excited to connect with like-minded
          individuals and collaborate on exciting projects.
        </p>
        <button className="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ">
          <a href="/">Contact</a>
        </button>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default AboutMe;
