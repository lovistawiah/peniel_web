"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SeniorPastor = () => {
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

  const pVariants = {
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

  return (
    <section className="my-10 flex flex-col-reverse items-center gap-10">
      <motion.div
        className="w-[80%] flex items-center flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={divVariants}
      >
        <Image
          src="/apostle.png"
          alt="Words of Grace"
          width={800}
          height={400}
        />
        <motion.h3
          className="text-2xl font-semibold leading-normal"
          variants={h3Variants}
        >
          Apostle Asomah Ali
        </motion.h3>
        <motion.h5
          className="text-lg italic leading-normal"
          variants={h3Variants}
        >
          <span className="text-[#FDC944] opacity-90">Senior</span> Pastor
        </motion.h5>
      </motion.div>
      {/* words of Grace */}
      <motion.div
        className="bg-[#D9D2D2] rounded-lg w-[85%] flex flex-col py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={divVariants}
      >
        <motion.h3
          className="text-2xl font-semibold text-center leading-normal"
          variants={h3Variants}
        >
          Words from the senior
          <span className="text-[#FDC944] text-3xl"> Pastor</span>
        </motion.h3>
        <motion.p className="p-3 place-self-center" variants={pVariants}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quod quia eos quisquam reprehenderit labore culpa officiis alias enim,
          deserunt nisi at maiores expedita, mollitia velit optio earum, quae ea
          aut cupiditate consequatur iure possimus magnam est! Repudiandae vitae
          laudantium ab, consequatur fuga harum quis, error eaque, minima est
          eum. Voluptatibus atque est eius sint quod ducimus voluptate dolorem
          enim eveniet aspernatur officia, perspiciatis facere quia asperiores
          quam ratione animi alias repellat non illo delectus. Voluptas, at vero
          nostrum ipsam corrupti veniam recusandae tenetur velit? Excepturi
          cumque rerum mollitia ad alias repellat velit impedit sit? Ex possimus
          quisquam ut soluta!
        </motion.p>
        <button className="bg-[#FDC944] px-5 py-3 text-white rounded-lg place-self-center">
          Read more
        </button>
      </motion.div>
    </section>
  );
};

export default SeniorPastor;
