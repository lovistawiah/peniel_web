"use client";
import AutoCarousel from "./AutoCarousel";
import { motion } from "framer-motion";

const Events = () => {
  const textVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const descVariants = {
    hidden: { opacity: 0.5, y: 50 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    // Events Section
    <section className="bg-white text-black w-full h-screen text-center flex flex-col items-center justify-start my-[32px]">
      <motion.section
        className="*:p-2 mb-[32px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <motion.h3
          className="text-[18px] leading-normal md:text-[24px]"
          variants={textVariants}
        >
          Event{" "}
          <span className="text-2xl leading-normal md:text-4xl font-bold text-[#FDC944]">
            Name
          </span>
        </motion.h3>
        <motion.p
          className="text-sm md:text-lg opacity-70 w-[90%] h-fit p-2 place-self-center flex items-center justify-center rounded-lg mt-4"
          variants={descVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem
          quod obcaecati, praesentium iure doloremque voluptates nostrum cum
          sapiente temporibus.
        </motion.p>
      </motion.section>
      <AutoCarousel />
      <motion.button
        className="w-[50%] h-fit bg-[#FDC944] font-semibold text-lg leading-normal text-white p-3 flex items-center justify-center rounded-lg mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        All Events
      </motion.button>
    </section>
  );
};

export default Events;
