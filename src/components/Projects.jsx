import { useState } from "react";
import projects from "../assets/data/data";
import SingleProjects from "./SingleProject";


const Projects = () => {

  const [showModal,setShowModal]= useState(false )
  const [projId,setProjId]=useState('')


  return (
    <section className="grid px-10 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10"id='Projects'>
    
      {projects.map((item) => (
        <div className=" m-8  rounded overflow-hidden shadow-lg" key={item.id}>
          <div className="px-6 py-4">
            <div className=" text-center font-bold text-xl mb-2">{item.title}</div>
            <img  className="h-28 mx-auto " src={item.img}></img>
            <p className="text-gray-700 text-left mt-3 dark:bg-slate-800 dark:text-white" > - {item.category}</p>
            <p className="text-gray-700 text-left dark:bg-slate-800 dark:text-white"> - {item.type}</p>
            <div className="flex justify-end	dark:bg-slate-800 dark:text-white">
            <button className=" bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>{setShowModal(true)
            setProjId(item)
            } }>More Info</button>
            </div>
          </div>
        </div>
      ))}
      {showModal ? <SingleProjects proj={projId} setShowModal={setShowModal}/>: null}

      

    
    </section>
  );
};
export default Projects;


