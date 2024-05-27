import React, { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { IconContext } from "react-icons";
import socials from "../../data/socials";
import Image from "next/image";
import logo from "../../public/images/avatar/logo.png";
import { motion } from "framer-motion";
import {
  childVariant,
  imageVariant,
} from "./motion";
import ResponsiveNav from "./ResponsiveNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksArray = [
    { name: "Home", address: "/" },
    { name: "About", address: "/#about" },
    { name: "Projects", address: "/#projects" },
    { name: "Contact", address: "/#contact" },
    // { name: "Blogs", address: "#blog" },
  ];

  const links = linksArray.map((link, index) => {
    return (
      <motion.li
        key={index}
        variants={childVariant}
        whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
        transition={{ delay: index * 0.2, duration: 0.3 }}
        initial="hidden"
        animate="visible"
        className={`transition-all ease-in-out duration-[500ms] relative hover:text-teal-300 hover:font-extrabold cursor-pointer text-[1rem] after:content-[""] after:absolute after:left-0 after:bottom-[-25%] after:w-[0%] after:h-[3px] after:rounded-[20px] after:bg-teal-300 after:transition-all after:duration-[500ms] after:ease-in-out hover:after:w-[100%] `}
      >
        <Link href={link.address}>{link.name}</Link>
      </motion.li>
    );
  });

  const filteredSocials = socials.filter((social) => {
    if (
      social.name === "email" ||
      social.name === "github" ||
      social.name === "linkedIn"
    ) {
      return social;
    }
  });

  const socialIcons = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} key={index}>
        <motion.a
          whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
          whileHover={{ scale: 1.4, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 400 }}
          className="relative"
          target="_blank"
          title={social.name}
          href={social.link}
        >
          <p className="absolute hidden hover:visible text-white-100">
            {social.name}
          </p>
          <motion.div
            variants={childVariant}
            whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
            initial="hidden"
            animate="visible"
            className={"flex space-x-2"}
          >
            <Image
              src={social.image}
              width={25}
              height={25}
              alt={social.name}
            />
          </motion.div>
        </motion.a>
      </Link>
    );
  });

  return (
      <div
          style={{
              position: "fixed",
              top: 0,
              width: "100%",
              backdropFilter: "blur(10px)",
          }}

          className={`z-50`}
      >
          <div
              className={`flex items-center justify-between py-4 max-w-[90%] mx-auto`}
          >
              <motion.div
                  variants={imageVariant}
                  whileInView={{ y: ["30%", "0%"], opacity: [0, 0.5, 1] }}
                  initial="hidden"
                  animate="visible"
              >
                <Link href='/'>
                  <Image width={80} height={25} src={logo} />
                </Link>
              </motion.div>

              <ul className={`hidden lmd:flex  items-center space-x-8`}>
                  {links}
              </ul>

              <motion.ul className={"flex space-x-2"}>
                  {socialIcons}
                  <div
                      onClick={() => {
                          setIsOpen(true);
                      }}
                      className="lmd:hidden"
                  >
                      <IconContext.Provider
                          value={{
                              color: "5eead4",
                              size: "2rem",
                              style: { marginTop: -5, cursor: "pointer" },
                          }}
                      >
                          <BiMenuAltRight />
                      </IconContext.Provider>
                  </div>
                  <ResponsiveNav isOpen={isOpen} setIsOpen={setIsOpen} />
              </motion.ul>
          </div>
      </div>
  );
};

export default NavBar;
