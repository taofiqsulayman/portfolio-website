import socials from "../../data/socials";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/avatar/logo.png";

const Footer = () => {
  const filteredSocials = socials.filter((social) => {
    if (
      social.name === "email" ||
      social.name === "github" ||
      social.name === "linkedIn"
    ) {
      return social;
    }
  });
  const Icons = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} passHref key={index}>
        <a className="mr-3" target="_blank" title={social.name}>
          <Image src={social.image} width={25} height={25} alt={social.name} />
        </a>
      </Link>
    );
  });
  const yearNow = new Date().getFullYear();
  return (
    <section data-aos="zoom-in-up" className="mt-8 ">
      <div className="max-w-[80%] mx-auto">
        <div className=" flex flex-col items-center py-8">
          <Image src={logo} width={160} height={30} alt="taofiq's logo" />
          <div className="my-4">{Icons}</div>
          <p className="text-[0.7rem] font-bold">{`© ${yearNow} All Rights Reserved`}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
