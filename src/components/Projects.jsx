import React from "react";
import {BsGithub} from "react-icons/bs"

function Projects() {
  return (
    <div className="w-full min-h-screen font-sans bg-gray-900">
      <section id="project" className="grid grid-cols-9 pb-24">
        <div className="col-start-2 col-span-4 mt-16 py-10">
            <h1 className="text-7xl text-white font-semibold">Discover My Projects</h1>
            <p className="text-white font-thin mt-2">Attention! These are just my dummy projects not a commercial one</p>
        </div>
        <div className="grid grid-cols-6">

        </div>
        <div className="col-start-2 col-span-3 row-start-2">
            <img className="rounded-md border-2 border-white" src="/img/projects/1.png" alt="" />
            <p className="rounded-sm text-center text-white font-semibold mt-2">Recipe Directory Note App</p>
        </div>

        <div className="col-start-2 col-span-3 text-center flex justify-between row-start-3 gap-4 mt-2">
            <button className="bg-black hover:bg-black/30 text-white w-1/2 rounded-md font-bold py-2 px-4 inline-flex items-center"> 
              <BsGithub className="w-6 h-6" />
              <a href="https://github.com/Rifqio/cooking-list-react" target="_blank"  className="mx-auto">Github</a>
            </button>
            <button className="bg-white hover:bg-white/50 text-black w-1/2 rounded-md font-bold py-2 px-4 inline-flex items-center"> 
              <a className="mx-auto" target="__blank" href="https://cranky-wright-fa6422.netlify.app/">Live Demo</a>
            </button>
        </div>

        <div className="col-start-6 col-span-3 row-start-2">
            <img className="rounded-md border-2 border-white" src="/img/projects/2.png" alt="" />
            <p className="rounded-sm text-center text-white font-semibold mt-2">Card Match </p>
        </div>

        <div className="col-start-6 col-span-3 text-center flex justify-between row-start-3 gap-4 mt-2">
            <button className="bg-black hover:bg-black/30 text-white w-1/2 rounded-md font-bold py-2 px-4 inline-flex items-center"> 
              <BsGithub className="w-6 h-6" />
              <a href="https://github.com/Rifqio/card-match-react" target="_blank"  className="mx-auto">Github</a>
            </button>
            <button className="bg-white hover:bg-white/50 text-black w-1/2 rounded-md font-bold py-2 px-4 inline-flex items-center"> 
              <a className="mx-auto" target="__blank" href="https://affectionate-ride-00f5b2.netlify.app/">Live Demo</a>
            </button>
        </div>

        <div className="col-start-4 mt-10 col-span-3 row-start-4">
          <img className="rounded-md border-2 border-white" src="/img/projects/3.png" alt="" />
          <p className=" rounded-sm text-center text-white font-semibold mt-2">Hotel Booking System Webapp </p>
        </div>
        <div className="col-start-4 row-start-5 col-span-3 text-center gap-4 mt-2">
            <button className="bg-black hover:bg-black/30 text-white w-1/2 rounded-md font-bold py-2 px-4 inline-flex items-center"> 
              <BsGithub className="w-6 h-6" />
              <a href="https://github.com/Rifqio/Hotel-Kelompok1" target="_blank"  className="mx-auto">Github</a>
            </button>
        </div>
      </section>
    </div>
  );
}

export default Projects;
