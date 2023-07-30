import Button from "@/components/button/Button";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const datas = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {datas.map((data) => {
        return (
          <div className={styles.item} key={data.id}>
            <div className={styles.content}>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <Button text="See more" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image className="" src={data.image} fill={true} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
