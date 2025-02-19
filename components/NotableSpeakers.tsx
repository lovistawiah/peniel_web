"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const NotableSpeakers = () => {
  const h2Variants = {
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

  const pVariants = {
    hidden: { opacity: 0.1, y: 50 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const divVariants = {
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

  const h3Variants = {
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

  return (
    <div className="flex flex-col items-center my-[70px] py-[30px] bg-[#ECECEC]">
      <motion.h2
        className="text-2xl font-bold text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={h2Variants}
      >
        Notable <span className="text-[#FDC944] text-3xl">Speakers</span>
      </motion.h2>
      <motion.p
        className="text-center w-[80%] mt-3 opacity-70 leading-normal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={pVariants}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sunt.
      </motion.p>
      <section className="flex flex-col md:flex-row items-center gap-[72px] mt-[50px] md:px-20 w-[80%]">
        {/* speakers */}
        <motion.div
          className="flex flex-col flex-1 gap-3 items-center bg-[#D9D2D2] p-3 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={divVariants}
        >
          <Image
            src="/apostle.png"
            width={200}
            height={200}
            alt="Apostle Asomah Ali"
            className="rounded-full object-cover"
          />
          <motion.h3
            className="text-lg font-bold leading-normal"
            variants={h3Variants}
          >
            <span className="text-[#FDC944]">Rev</span> Nora Ali
          </motion.h3>
          <motion.p
            className="text-center opacity-70 leading-normal"
            variants={pVariants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            pariatur eos eligendi veniam iste inventore. Voluptates deleniti
            sunt a voluptate.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col flex-1 gap-3 items-center bg-[#D9D2D2] p-3 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={divVariants}
        >
          <Image
            src="/apostle.png"
            width={200}
            height={200}
            alt="Apostle Asomah Ali"
            className="rounded-full object-cover"
          />
          <motion.h3
            className="text-lg font-bold leading-normal"
            variants={h3Variants}
          >
            <span className="text-[#FDC944]">Rev</span> Nora Ali
          </motion.h3>
          <motion.p
            className="text-center opacity-70 leading-normal"
            variants={pVariants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            pariatur eos eligendi veniam iste inventore. Voluptates deleniti
            sunt a voluptate.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col flex-1 gap-3 items-center bg-[#D9D2D2] p-3 rounded-lg shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={divVariants}
        >
          <Image
            src="/apostle.png"
            width={200}
            height={200}
            alt="Apostle Asomah Ali"
            className="rounded-full object-cover"
          />
          <motion.h3
            className="text-lg font-bold leading-normal"
            variants={h3Variants}
          >
            <span className="text-[#FDC944]">Rev</span> Nora Ali
          </motion.h3>
          <motion.p
            className="text-center opacity-70 leading-normal"
            variants={pVariants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            pariatur eos eligendi veniam iste inventore. Voluptates deleniti
            sunt a voluptate.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default NotableSpeakers;
