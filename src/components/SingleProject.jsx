const SingleProjects = ({ proj, setShowModal }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-100 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">{proj.title}</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowModal(false)}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div>
            <h2>Carousel</h2>
            <img src={proj.img} className="object-contain h-48 w-full"></img>
          </div>
          <div className="p-6 flex ">
            <div >
              <h2>Tech Stack:</h2>
              <h2>{proj.TechStack}</h2>
            </div>
            <div>
              <h2>Description:</h2>
              <p>{proj.desc}</p>
            </div>
          </div>
          <div className="flex justify-end ">
            <a> <button className="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded " >Live</button></a>
            <a> <button className="flex my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded " >Code</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;

/* 
 { project= projects.find((element) => element.id === projId);}
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">General Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                 <h1>{projId}</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
*/
