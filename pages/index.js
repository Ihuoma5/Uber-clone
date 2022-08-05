import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="wrapper">
      <Map />
      <div className="action-item">
        <div className="Header">
          <img
            className="logo-img"
            src="https://tinypic.host/images/2022/08/04/Blood-now-logo.jpg"
          />
          <div className="profile">
            <div className="name">Ihuoma Ndukwe</div>
            <img
              className="user-img"
              src="https://tinypic.host/images/2022/08/04/bear-wallpaper-pc-Mac---.png"
            ></img>
          </div>
        </div>

        <div className="ActionButtons">
          <Link href="/Search">
            <div className="ActionButton">
              <img
                className="ActionButtonImg"
                src="https://tinypic.host/images/2022/08/04/order-sign-logo-design.jpg"
              />
              Order Blood
            </div>
          </Link>
          <div className="ActionButton">
            <img
              className="ActionButtonImg"
              src="https://tinypic.host/images/2022/08/04/order-sign-logo-design.jpg"
            />
            Donate Blood
          </div>
        </div>

        <div className="input-button">
          Hospital location you want to check out
        </div>
      </div>
    </div>
  );
}
