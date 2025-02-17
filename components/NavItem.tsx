import { motion, Variants } from "framer-motion";
import Link from "next/link";
const NavItem = ({
  name,
  navItemVariants,
}: {
  name: string;
  navItemVariants: Variants;
}) => {
  return (
    <motion.li
      className="w-[95%] h-[70px] flex items-center justify-center rounded-[7px] transition duration-300 ease-in-out *:opacity-80 hover:*:opacity-100 md:last-of-type:ml-auto"
      variants={navItemVariants}
    >
      <Link
        href="/"
        className="bg-[#e6e6e6] hover:bg-[#d3d3d3] w-full h-full underline-animation flex justify-center rounded-[7px] items-center"
      >
        {name}
      </Link>
    </motion.li>
  );
};

export default NavItem;
