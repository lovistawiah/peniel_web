"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import useNavbar from "@/hooks/UseNavbar";
import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import NavItem from "./NavItem";
import { navName } from "@/constants";

const Navbar = () => {
  const { toggle, isOpen, iconClicked, handleIconClick } = useNavbar();
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
        duration: 0.3, // Set the duration to 0.5 seconds
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="w-full h-fit bg-white">
      <nav
        className="flex justify-between items-center h-16 text-black"
        role="navigation"
      >
        {/* image */}
        <div className="w-fit h-fit ml-5 mt-3 cursor-pointer">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
        {/* menu bar */}
        <div
          onClick={toggleAndIconClick}
          className={`cursor-pointer md:hidden text-black w-fit h-fit mr-5 mt-3 ${
            iconClicked ? "icon-click-animation" : ""
          }`}
        >
          {!isOpen ? (
            <FiMenu className="cursor-pointer md:hidden block text-4xl" />
          ) : (
            <IoCloseSharp className="cursor-pointer md:hidden block text-4xl" />
          )}
        </div>
      </nav>
      {/* menu */}
      {isOpen && (
        <div className="w-full text-black text-center text-3xl h-[80vh] pt-7 bg-[#EEEEEE]">
          <motion.ul
            className="flex flex-col justify-center items-center opacity-90 gap-3"
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
              className="flex gap-4 mt-5 *:opacity-80 hover:*:opacity-100"
              variants={navItemVariants}
            >
              <SocialIcon />
            </motion.li>
          </motion.ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
