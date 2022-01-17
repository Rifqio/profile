import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({threshold:0.1});
  const animation = useAnimation();
  useEffect(() => {
    console.log(inView)
    if(inView) {
      animation.start({
        x: '0',
        transition: {
          type:'spring', stiffness:"30"
        }
      })
    }else{
      animation.start({
        x: '300vw'
      })
    }
  
  },[inView, animation])

  return (
    <div
      className="w-full min-h-screen"
    >
      <section id="about" className="grid grid-cols-8">
        <div className="col-start-2 mt-16 col-span-3 py-10">
          <span className="text-8xl border-b border-gray-300 font-semibold">
            About Me
          </span>
        </div>

        <div className="col-start-2 col-span-2 text-justify">
          <p>
            Hello there! My name is Rifqi Oktario but please call me Rio. At the
            moment I'm pursuing my computer science degree{" "}
          </p>{" "}
          <i className="font-light">
            {" "}
            (uh associate degree to be more precise)
          </i>{" "}
          <p>
            {" "}
            in Sebelas Maret University. I always love learning new things
            especially things that related to computer or design. Thus becoming
            a frontend developer is something I always wanted to!
          </p>
        </div>

        <div className="col-start-5 row-start-2 mb-10 col-span-2 "  ref={ref}>
          <motion.img
            className="h-[450px] rounded-lg border-2 border-gray-400 shadow-md shadow-gray-500"
            src="/img/2.jpeg"
            alt=""
            animate={animation}
          />
        </div>

        <img
          className=" mt-4 col-start-8 row-start-1 text-black"
          src="/img/x-banner.svg"
          alt=""
        />
        <img
          className=" col-start-7 row-start-1 translate-y-32 text-black"
          src="/img/x-banner.svg"
          alt=""
        />
        <img
          className=" col-start-8 row-start-2 text-black"
          src="/img/x-banner.svg"
          alt=""
        />
      </section>
    </div>
  );
}

export default About;
