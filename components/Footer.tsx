import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-3 flex flex-col items-center">
      {/* links */}
      <div className="w-full flex flex-col gap-[27px] md:flex-row md:justify-center  items-center text-base leading-normal md:gap-7">
        <div>
          <h3 className="font-bold mb-3 text-xl">Navigation</h3>
          <ul className="flex flex-col gap-y-3 *:font-semibold *:text-[#FDC944]">
            <li>
              <Link href="/" className="underline-animation">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="underline-animation">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="underline-animation">
                Ministries
              </Link>
            </li>
            <li>
              <Link href="/" className="underline-animation">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* profile */}
        <div className="w-[300px] h-[230px] flex flex-col items-center gap-5">
          <div className="w-[150px] h-[150px] rounded-[7px]">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="Peniel House Ministries International Logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-[60px] text-center text-base leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, aperiam!
          </div>
        </div>
        {/* social icons and location*/}
        <div className="w-full md:w-fit h-fit flex flex-col items-center">
          {/* set of icons 1 */}
          <div className="flex text-3xl gap-x-7 *:opacity-70 hover:*:opacity-100">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
          </div>
          <div>
            <h3 className="flex justify-center items-center gap-1 font-bold text-xl leading-normal">
              <Phone className="text-4xl" />
              <span>
                <span>+(233)</span> <span>243</span> <span>343</span>{" "}
                <span>446</span>
              </span>
            </h3>

            <h3 className="flex justify-center items-center gap-1 font-bold text-xl leading-normal">
              <MapPin className="text-4xl" />
              <span>Adjacent White Daisy School</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[95%] bg-gray-200 h-[2px] my-[20px] "></div>
      <div className="w-full text-center opacity-50 text-sm">
        &copy;2024 Peniel House Ministries Information. | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
