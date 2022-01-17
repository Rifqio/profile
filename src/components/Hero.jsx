import { useEffect, useRef } from "react";
import Typed from "typed.js";
import * as Scroll from 'react-scroll';
import { Link,  animateScroll as scroll } from 'react-scroll'
import { BsArrowRight } from "react-icons/bs"

function Hero() {
  const word = useRef(null)

  useEffect(() => {
      const typed = new Typed(word.current,{
          strings: ["developer","student", "musician", "gamer", "designer"],
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
          showCursor: false,
      })
      return () => {
          typed.destroy()
      }
  }, [])

  return (
    <div className="w-full min-h-screen font-sans bg-gray-900">
      <div className="grid tex grid-cols-8 pb-24 w-full">
          
        <div className="col-start-2 py-10 place-items-center">
          <Link to="/" className="flex justify-center items-center w-12 h-12 text-xl font-semibold text-gray-900 bg-white rotate-45 rounded-lg">
            <Link to="/" className="-rotate-45">R</Link>
          </Link>
        </div>

        <ul className="grid grid-cols-4 col-start-5 items-center col-span-4">
          <li><Link to="/" smooth={true} className="uppercase tracking-widest text-white cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} className="uppercase tracking-widest text-white cursor-pointer">About</Link></li>
          <li><Link to="skills" smooth={true} offset={100}  className="uppercase tracking-widest text-white cursor-pointer">Skills</Link></li>
          <li><Link to="project" smooth={true} className="uppercase tracking-widest text-white cursor-pointer">Projects</Link></li>
        </ul>

        <div className="col-start-2 col-span-5">
            <span className="pl-5 text-[13px] text-white/50 font-medium tracking-widest uppercase border-l border-white/50">Featured</span>
            <div className="mt-3 text-[110px] text-white font-medium leading-none">
                Hi my name is Rio and I'm a <br /> <span className="absolute" ref={word}></span>
            </div>
        </div>

        <div className="relative col-start-7 row-start-3">
            <img className="absolute right-0 top-0 w-30 translate-x-1/2 -translate-y-1/2" src="/img/dots.svg" alt="" />
            <a href="mailto:oktariorifqi@gmail.com" className="flex flex-col justify-between px-7 py-8 text-gray-900 bg-[#FEBE02] aspect-1/1">
                <BsArrowRight className=" w-6 h-6" />
                <span className="text-2xl font-semibold">Contact Me</span>
            </a>
        </div>

        <div className="col-start-5 row-start-5 col-span-2">
            <span className="text-white font-semibold pl-5 block border-l border-white uppercase tracking-widest">my principles</span>
            <p className="text-white pl-5 text-sm">
            " If You Think Math is Hard Try Web Design. " 
            </p>
            <p className="text-white pl-5 font-thin text-sm">
              - Someone from facebook
            </p>
        </div>

        <div className="relative col-start-8 row-start-5">
            <div className="bg-gray-800/50 px-7 py-20"></div>
        </div>
        
        <div className="col-start-2 row-start-5 w-64 h-64">
            <img className="absolute w-16 -translate-x-full translate-y-36 rotate-90" src="/img/dots.svg" alt="" />
            <img className="rounded-lg border-2 border-white" src="/img/1.jpg" alt="" />
            <div className="mt-4 text-white">
                <span className="text-2xl font-semibold block">Rifqi Oktario</span>
                <span className="font-thin">Frontend Web Developer</span>
            </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;
