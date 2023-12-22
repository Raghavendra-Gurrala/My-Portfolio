import { Typography, Input, Button, Image, Tooltip, notification } from "antd";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import {
  AimOutlined,
  MoreOutlined,
  DownOutlined,
  SendOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import LOGO from "../my-images/LOGO.png";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

function Footer() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Function to handle name input change
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Only allow alphabets in the name
    if (/^[a-zA-Z]*$/.test(value) || value === "") {
      setName(value);
      setNameError("");
    } else {
      setNameError("Only alphabets are allowed");
    }
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;

    // Validate email format
    if (/^[a-z0-9@]*$/.test(value) || value === "") {
      setEmail(value);
      setEmailError("");
    } else {
      setEmailError("Enter a valid email address");
    }
  };

  // Function to handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the required fields is empty
    if (!name || !email || !message) {
      // Display Ant Design notification
      notification.warning({
        message: "Warning",
        description: "Please fill all the fields",
        icon: <InfoCircleOutlined style={{ color: "#108ee9" }} />,
      });
    } else {
      // Log the entered values to the console or perform other actions
      const templateParams = {
        to_name: "Raghavendra Gurrala",
        from_name: name,
        message: message,
        reply_to: email,
      };
      emailjs
        .send(
          "service_yqb3gph",
          "template_x3zjd89",
          templateParams,
          "ymjJceBrBeAW_XkV-"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => { 
            console.log(error.text);
          }
        );
      notification.success({
        message: "Success",
        description: "Message sent successfully!",
      });
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      // You can add further logic here, such as sending the form data to a server
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className={styles.contactinfoicons}>
        <AimOutlined className={styles.icons} />
        <MoreOutlined className={styles.icons} />
        <DownOutlined className={styles.icons1} />
      </div>
      <div className={styles.skilltextcontainer}>
        <Typography className={styles.Skilltext}>Contact</Typography>
      </div>
      <form
        className={styles.fieldscontainer}
        onSubmit={handleSubmit}
        ref={form}
      >
        <div className={styles.inlineInputs}>
          <Tooltip title={nameError} visible={!!nameError} placement="bottom">
            <Input
              className={styles.inlineInput}
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              name="user_name"
            />
          </Tooltip>
          <Tooltip title={emailError} visible={!!emailError} placement="bottom">
            <Input
              className={styles.inlineInput}
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={handleEmailChange}
            />
          </Tooltip>
        </div>
        <div className={styles.messageboxcontainer}>
          <TextArea
            rows={4}
            placeholder="Message"
            className={styles.messageinput}
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className={styles.sendbuttoncontainer}>
          <Button
            type="primary"
            size="large"
            className={styles.sendbutton}
            htmlType="submit" // This is important to trigger the form submission
          >
            Send Message
            <SendOutlined />
          </Button>
        </div>
      </form>
      <div className={styles.containericons}>
        <div className={styles.contacticontext}>
          <MailOutlined className={styles.contacticons} />
          <Typography className={styles.contacttexticons}>
            raghavagurrala09@gmail.com
          </Typography>
        </div>
        <div className={styles.contacticontext}>
          <PhoneOutlined className={styles.contacticons} />
          <Typography className={styles.contacttexticons}>
            +91 9989935776
          </Typography>
        </div>
        <div className={styles.contacticontext}>
          <PushpinOutlined className={styles.contacticons} />
          <Typography className={styles.contacttexticons}>
            Hyderabad, Telangana
          </Typography>
        </div>
      </div>
      <hr className={styles.liner} />
      <div className={styles.lastarea}>
        <Image
          preview={false}
          width={170}
          height={100}
          src={LOGO}
          className={styles.logoimage1}
        />
        <div className={styles.righttexts}>
          <Typography className={styles.lastexts}>
            2023 © Raghavendra Rao Gurrala. All rights reserved.
          </Typography>
          <Typography className={styles.lastexts1}>
            Icons by icons8.com.
          </Typography>
        </div>
        <div className={styles.socialmediaicons}>
          <a
            href="https://www.facebook.com/profile.php?id=100008955216803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className={styles.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/raghavendra-rao-gurrala-a5875220a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined className={styles.icons} />
          </a>
          <a
            href="https://github.com/Raghavendra-Gurrala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className={styles.icons} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
