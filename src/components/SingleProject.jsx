const SingleProjects = ({ proj, setShowModal }) => {
  return (
    <div className="flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-gray-100 outline-none focus:outline-none dark:bg-slate-800 dark:text-white">
      <div className="relative w-full max-w-2xl  max-h-full my-6 rounded-xl mx-auto max-w-3xl dark:bg-gray-700" > {/* border of the main box  */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none dark:bg-gray-800">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 dark:border-white rounded-t-lg" >{/* title box  */}
            <h3 className="text-3xl font-semibold">{proj.title}</h3>
            <button
              className="bg-transparent border-0 text-black float-right text-center align-middle "
              onClick={() => setShowModal(false)}
            >
              <span className="text-black opacity-7 dark:text-white h-6 w-6 text-2xl   flex items-center justify-center rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="p-5">
         
            <img src={proj.img} className="object-contain h-48 w-full"></img>
          </div>
          <div className="p-6  flex-column md:flex  ">
            <div className="dark:text-gray-300 px-6 mb-4">
              <h2 className="dark:text-white text-xl text-left font-semibold" >Tech Stack:</h2>
              {proj.TechStack.map((el)=> (
                <h2 className="text-md text-left">{el}</h2>
              ))}
            </div>
            <div className="dark:text-gray-300 px-6">
              <h2 className="dark:text-white text-xl  text-left font-semibold">Description:</h2>
              <p className=" text-md text-left" >{proj.desc}</p>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <a href={proj.live} > <button className="flex mx-3 my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded " >Live</button></a>
            <a href={proj.code} > <button className="flex mx-3  my-3 md:m-3 md:text-left bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded " >Code</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;

/* 
 { project= projects.find((element) => element.id === projId);}

<!-- Modal toggle -->
<button data-modal-target="staticModal" data-modal-toggle="staticModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>

<!-- Main modal -->
<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>

*/
