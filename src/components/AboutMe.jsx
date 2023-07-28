const AboutMe = () => {
  return (
    <section className="container mx-auto" id='About' >
      <h1 className="text-3xl font-bold underline text-left">About</h1>
      <p className="text-sm text-left mt-2">Hello! I'm Davide, </p>
      <p className="text-sm text-left tracking-tight font-serif mt-2">
        a junior full stack developer with a passion for building dynamic and
        user-centric applications.
      </p>

      <p className="text-sm text-left tracking-tight font-serif mt-2">
        With a solid understanding of web development and a diverse tech stack,
        I strive to create seamless experiences for users while constantly
        expanding my knowledge. In my journey as a developer, I have gained
        experience working with technologies such as Express, PostgreSQL,
        MongoDB, Jest, React, and React Native.
      </p>
      <p className="text-sm text-left tracking-tight font-serif mt-2 ">
        Leveraging these tools,
      </p>
      <p className="text-sm text-left tracking-tight font-serif ">
        I have developed a range of projects that showcase my ability to build
        efficient and scalable applications.
      </p>
      <p className="text-sm text-left tracking-tight font-serif mt-2">
        I invite you to explore my portfolio, where you'll find a collection of
        projects that demonstrate my technical capabilities and creative
        problem-solving.
      </p>
      <p className="text-sm text-left tracking-tight font-serif mt-2">
        Each project represents a milestone in my journey as a developer,
        highlighting my ability to apply the technologies I know to real-world
        scenarios.
      </p>
      <div className="flex items-start my-3">
        <button class="text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        <a href="/">Projects</a>
        </button>
      </div>
      <div className=" items-start md:flex  ">
        <p className="text-sm text-left tracking-tight font-serif mt-2">
          If you have any inquiries or would like to discuss potential
          opportunities, please feel free to reach out to me through the contact
          information provided below. I'm excited to connect with like-minded
          individuals and collaborate on exciting projects.
        </p>
        <button class="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded "><a href="/">Contact</a>

        </button>
      </div>
    </section>
  );
};

export default AboutMe;
