// React Imports
import Image from "next/image";
import Link from "next/link";

// Image Imports
import LogoImg from "../../../../../public/assets/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImg} alt="Logo" width={276} height={51} />
    </Link>
  );
};

export default Logo;
