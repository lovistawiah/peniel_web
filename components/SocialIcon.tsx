import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <>
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
    </>
  );
};

export default SocialIcon;
