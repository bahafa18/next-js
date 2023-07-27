import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={style.container}>
      <div>copyright 2023 Bahafa. All rights reserved</div>
      <div className={style.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={style.icon}
          alt="Bahafa Dev"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={style.icon}
          alt="Bahafa Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={style.icon}
          alt="Bahafa Dev"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={style.icon}
          alt="Bahafa Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
