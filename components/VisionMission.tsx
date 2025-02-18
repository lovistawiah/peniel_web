"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VisionMission = () => {
  const firstItemVariants = {
    hidden: { opacity: 0.1, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const secondItemVariants = {
    hidden: { opacity: 0.1, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const thirdItemVariants = {
    hidden: { opacity: 0.1, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="p-[62px] flex flex-col md:flex-row items-center gap-[83px] md:gap-[20px] bg-[#E4E4E4] ">
      <motion.div
        className="w-[90%] md:w-full  flex flex-col gap-3 h-fit bg-[#D9D2D2] rounded-lg p-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={firstItemVariants}
      >
        <h3 className="text-2xl leading-normal font-bold text-center opacity-95">
          who we{" "}
          <span className="text-4xl text-[#FDC944] opacity-100">Are</span>
        </h3>
        <p className="opacity-80 text-base leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          modi nihil suscipit necessitatibus, perspiciatis fuga nam minima?
          Perferendis obcaecati eveniet, illum, magni, perspiciatis modi nihil
          quasi laudantium neque tenetur sapiente officia! Asperiores quam
          itaque vel libero eligendi voluptates possimus!
        </p>
        <button className="text-center w-fit p-2 bg-[#FDC944] text-white rounded-md flex place-self-center hover:bg-[#fdbf22] ">
          {" "}
          Learn more
          <span>
            <ArrowRight />
          </span>
        </button>
      </motion.div>
      {/* mission */}
      <motion.div
        className="w-[90%] md:w-full flex flex-col gap-3 h-fit bg-[#D9D2D2] rounded-lg p-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={secondItemVariants}
      >
        <h3 className="text-2xl leading-normal font-bold text-center opacity-95">
          Our
          <span className="text-4xl text-[#FDC944] opacity-100">Mission</span>
        </h3>
        <p className="opacity-80 text-base leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          modi nihil suscipit necessitatibus, perspiciatis fuga nam minima?
          Perferendis obcaecati eveniet, illum, magni, perspiciatis modi nihil
          quasi laudantium neque tenetur sapiente officia! Asperiores quam
          itaque vel libero eligendi voluptates possimus!
        </p>
        <button className="text-center w-fit p-2 bg-[#FDC944] text-white rounded-md flex place-self-center hover:bg-[#fdbf22] ">
          {" "}
          Learn more
          <span>
            <ArrowRight />
          </span>
        </button>
      </motion.div>
      {/* vision */}
      <motion.div
        className="w-[90%] md:w-full flex flex-col gap-3 h-fit bg-[#D9D2D2] rounded-lg p-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={thirdItemVariants}
      >
        <h3 className="text-2xl leading-normal font-bold text-center opacity-95">
          Our
          <span className="text-4xl text-[#FDC944] opacity-100">Vision</span>
        </h3>
        <p className="opacity-80 text-base leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          modi nihil suscipit necessitatibus, perspiciatis fuga nam minima?
          Perferendis obcaecati eveniet, illum, magni, perspiciatis modi nihil
          quasi laudantium neque tenetur sapiente officia! Asperiores quam
          itaque vel libero eligendi voluptates possimus!
        </p>
        <button className="text-center w-fit p-2 bg-[#FDC944] text-white rounded-md flex place-self-center hover:bg-[#fdbf22] ">
          {" "}
          Learn more
          <span>
            <ArrowRight />
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default VisionMission;
