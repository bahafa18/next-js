import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AboutImg from "public/about.jpeg";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={AboutImg} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            iusto accusantium. Ad aspernatur eum exercitationem itaque
            temporibus unde asperiores vitae et. Debitis consectetur officiis
            itaque eligendi mollitia! In expedita culpa fuga esse hic est magni
            magnam maxime inventore! Saepe nobis fugit inventore eum labore,
            facere porro architecto aut aperiam unde.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            delectus id, tempore quo ratione ex rem autem, repellat odio iusto
            fugit veniam consequuntur asperiores quod?
            <br />
            <br />- design ui
            <br />
            <br />- slicing UI
            <br />
            <br />- programming
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
