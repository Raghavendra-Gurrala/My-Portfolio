import React from "react";
import { Image, Typography, Button } from "antd";
import {
  DownloadOutlined,
  AimOutlined,
  MoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import myimage from "../my-images/Minebg.png";
import codingscreen from "../my-images/laptopscreen.jpg";
import HTML from "../my-images/HTML.png";
import CSS from "../my-images/CSS.png";
import JS from "../my-images/JS.png";
import REACT from "../my-images/REACT.png";
import WORDPRESS from "../my-images/WORDPRESS.png";
import TESTING from "../my-images/TESTING.png";
import styles from "./styles.module.css";
import Myresume from "../my-images/resumepdf/Raghavendra Rao Resume.pdf";

function Maincontent() {
  const pTag = `<p>`;
  const pTag1 = `</p>`;
  const StartTag = `<>`;
  const EndTag = `</>`;

  return (
    <div>
      <div className={styles.homecontent}>
        <div className={styles.leftcontent}>
          <Typography className={styles.lefttext}>
            Hello, I'm Raghavendra,
          </Typography>
          <Typography className={styles.lefttag}>Frontend Developer</Typography>
          <Typography className={styles.leftsubtag}>
            "Passionate frontend developer with a keen eye for design and a
            dedication <br />
            to crafting seamless, user-centric experiences"
          </Typography>
          <div className={styles.cvbutton}>
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              className={styles.downloadcv}
            >
              <a href={Myresume} download="Raghavendra Gurrala.pdf">
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className={styles.initialcircle}></div>
        <div className={styles.circle}></div>
        <div className={styles.comcircle}></div>
        <div className={styles.docircle}></div>
        <div className={styles.myimage}>
          <Image
            preview={false}
            width={500}
            height={550}
            src={myimage}
            className={styles.myimage}
          />
        </div>
      </div>
      <div className={styles.storycontainer}>
        <div className={styles.infoicons}>
          <AimOutlined className={styles.icons} />
          <MoreOutlined className={styles.icons} />
          <DownOutlined className={styles.icons1} />
        </div>
        <div className={styles.aboutmefield}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography className={styles.abutme}>About me</Typography>
            <div className={styles.biotext}>
              <Typography className={styles.bio}>
                <span style={{ color: "#00cccc" }}>{pTag}</span>
                <br />
                <br />
                <span
                  style={{
                    fontSize: "25px",
                    color: "#00cccc",
                    fontWeight: "bold",
                  }}
                >
                  Hello!
                </span>{" "}
                <br />
                <br />
                My name is Raghavendra and I specialize in web development that
                utilizes{" "}
                <span style={{ color: "#00cccc" }}>
                  HTML, CSS, JS and REACT{" "}
                </span>{" "}
                etc. <br />
                <br />
                I am a highgly motivated individual and eternal optimist
                dedicated to writing lear, consise, robust code that works.
                Striving to never stop learning and improving.
                <br />
                <br /> Outside the coding world, I wear my{" "}
                <span style={{ color: "#00cccc" }}>web designer</span> hat,
                dedicated to the art of creating captivating and interactive
                pages through the{" "}
                <span style={{ color: "#00cccc" }}>wordpress</span> platform.{" "}
                <br />
                <br />I like to have my perspective and belief systems
                challenged so that i see the world through new eyes.
                <br />
                <br />
                <span style={{ color: "#00cccc" }}>{pTag1}</span>
              </Typography>
            </div>
          </div>
          <div>
            <Image
              preview={false}
              width={500}
              height={570}
              src={codingscreen}
              className={styles.codingImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.myskillcontainer}>
        <div className={styles.infoicons}>
          <AimOutlined className={styles.icons} />
          <MoreOutlined className={styles.icons} />
          <DownOutlined className={styles.icons1} />
        </div>
        <div className={styles.skilltextcontainer}>
          <Typography className={styles.Skilltext}>My Skills</Typography>
        </div>
        <div className={styles.skillmid}>
          <Typography className={styles.tagprops}>{StartTag}</Typography>
          <div className={styles.imagecontainer}>
            <div className={styles.imageGrid}>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={HTML}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>HTML</Typography>
              </div>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={CSS}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>CSS</Typography>
              </div>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={JS}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>
                  JAVASCRIPT
                </Typography>
              </div>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={REACT}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>REACT JS</Typography>
              </div>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={WORDPRESS}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>WORDPRESS</Typography>
              </div>
              <div className={styles.imagetext}>
                <Image
                  preview={false}
                  width={100}
                  height={100}
                  src={TESTING}
                  className={styles.Imageedit}
                />
                <Typography className={styles.skillnames}>
                  MANUAL TESTING
                </Typography>
              </div>
            </div>
          </div>
          <Typography className={styles.tagprops}>{EndTag}</Typography>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

export default Maincontent;
