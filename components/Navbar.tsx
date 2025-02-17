"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import useNavbar from "@/hooks/UseNavbar";
import { motion, useAnimation } from "framer-motion";
import SocialIcon from "./SocialIcon";
import NavItem from "./NavItem";
import { navName } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const { toggle, isOpen, iconClicked, handleIconClick } = useNavbar();
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const toggleAndIconClick = () => {
    toggle();
    handleIconClick();
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Set the duration to 0.5 seconds
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full h-fit md:flex md:items-center md:justify-between md:h-fit md:px-9">
      <nav
        className="flex justify-between items-center h-16 text-black md:pt-[30px] md:h-fit "
        role="navigation"
      >
        {/* image */}
        <Link
          href="/"
          className="w-fit h-fit md:w-[100px] md:h-[100px] ml-5 mt-3 cursor-pointer rounded-full md:m-0"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer w-[50px] h-[50px] md:w-[80px] md:h-[80px] "
          />
        </Link>
        {/* menu bar */}
        <div
          onClick={toggleAndIconClick}
          className={`cursor-pointer md:hidden text-black w-fit h-fit mr-5 mt-3 ${
            iconClicked ? "icon-click-animation" : ""
          }`}
        >
          {!isOpen ? (
            <FiMenu className="cursor-pointer block text-4xl" />
          ) : (
            <IoCloseSharp className="cursor-pointer block text-4xl" />
          )}
        </div>
      </nav>
      {/* menu */}
      {isOpen && (
        <div className="w-full text-black text-center text-3xl h-[80vh] pt-7 bg-[#EEEEEE]">
          <motion.ul
            className="flex flex-col justify-center items-center opacity-90 gap-3 "
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {navName.map((name, index) => (
              <NavItem
                key={index}
                name={name}
                navItemVariants={navItemVariants}
              />
            ))}

            {/* social icons */}
            <motion.li
              className="flex gap-4 mt-5 *:opacity-80 hover:*:opacity-100 md:hidden"
              variants={navItemVariants}
            >
              <SocialIcon />
            </motion.li>
          </motion.ul>
        </div>
      )}
      {/* nav items for larger screens */}
      {!isOpen && (
        <motion.ul
          className="hidden md:flex flex-row justify-end items-center gap-6 md:w-full md:h-fit md:text-lg md:font-semibold"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {navName.map((name, index) => (
            <motion.li
              key={index}
              className="text-black text-lg"
              variants={navItemVariants}
            >
              <Link
                href={`/${name.toLowerCase()}`}
                className="underline-animation"
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
};

export default Navbar;
