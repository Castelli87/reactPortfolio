import projects from "../assets/data/data";


const Projects = () => {
  return (
    <section className=" container  grid justify-items-center mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10"id='Projects'>
    
      {projects.map((item) => (
        <div className="max-w-sm m-8 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
            <img  className="h-28 mx-auto " src={item.img}></img>
            <p className="text-gray-700 text-left mt-3" > - {item.category}</p>
            <p className="text-gray-700 text-left "> - {item.type}</p>
            <div className="flex justify-end	">
            <button class=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" ><a>More Info</a></button>

            </div>
          </div>
        </div>
      ))}
  

    
    </section>
  );
};
export default Projects;


