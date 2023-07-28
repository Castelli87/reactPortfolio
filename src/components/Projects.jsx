import projects from "../assets/data/data";

const Projects = () => {
  return (
    <section>
      {projects.map((item) => 

<div class="max-w-sm rounded overflow-hidden shadow-lg">

<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{item.title}</div>
  <p class="text-gray-700 text-base">
    {item.type}
  </p>
</div>
</div>
      
     ) }
    </section>
  );
};
export default Projects;


/* 
<div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
      <div class="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{item.title}</div>
    <p class="text-gray-700 text-base">
      {item.type}
    </p>
  </div>
</div>
*/