import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  const socialMedia = [
    {
      icon: faInstagram,
      url: "https://www.instagram.com",
    },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com",
    },
    {
      icon: faTwitter,
      url: "https://www.twitter.com",
    },
  ];

  return (
    <div className="py-20 flex items-center justify-center flex-wrap gap-8">
      {socialMedia.map((item, index) => (
        <Link
          href={item.url}
          key={index}
          className="bg-cardBg rounded-lg border border-socialMedia "
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="px-3 py-2 text-2xl text-socialMedia"
          />
        </Link>
      ))}
    </div>
  );
};

export default Footer;
