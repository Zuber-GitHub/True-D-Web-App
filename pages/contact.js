import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Breakpoints } from "../styles/Breakpoints";
import emailjs from "@emailjs/browser";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 12vh auto 0;
  min-width: 300px;
  @media (max-width: ${Breakpoints.mobile_small}) {
    width: 70%;
  }

  .heading {
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
  }
  .name,
  .email,
  .phone,
  .subject,
  .message {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }
  .message {
    height: 5rem;
  }
  .submit {
    background-color: #333331;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .submit:hover:enabled {
    background-color: black;
  }
  input:focus {
    outline: none !important;
    border-color: #000;
  }
  textarea:focus {
    outline: none !important;
    border-color: #000;
  }
  button:disabled {
    background-color: #999;
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

function Contact() {
  const form = useRef();
  const [isPhone, setIsPhone] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isSubject, setIsSubject] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [isName, setIsName] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if ([isEmail, isPhone, isSubject, isMessage, isName].every((el) => !!el)) {
      setDisabled(false);
    } else {
      if (disabled === false) {
        setDisabled(true);
      }
    }
  }, [isEmail, isPhone, isSubject, isMessage, isName]);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(isEmail, isPhone, isSubject, isMessage, isName);

    emailjs
      .sendForm(
        "service_9wjebfq",
        "template_cswuew9",
        form.current,
        "EUa3vyznunpy-VkAp"
      )
      .then(
        (result) => {
          setIsEmail("");
          setIsPhone("");
          setIsMessage("");
          setIsSubject("");
          setIsName("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (phoneRegex.test(inputValue)) {
      setIsPhone(inputValue);
    }
  };
  return (
    <Wrapper>
      <p className="heading">Get in touch</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input
          value={isName}
          onChange={(e) => {
            setIsName(e.target.value);
          }}
          type="text"
          id="name"
          className="name"
          placeholder="Your name....."
        />

        <label>Email</label>
        <input
          value={isEmail}
          onChange={(e) => {
            setIsEmail(e.target.value);
          }}
          className="email"
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
        />
        <label>Phone Number</label>
        <input
          value={isPhone}
          onChange={handleChange}
          className="phone"
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Phone Number..."
        />
        <label>Subject</label>
        <input
          value={isSubject}
          onChange={(e) => {
            setIsSubject(e.target.value);
          }}
          className="subject"
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject..."
        />
        <label>Message</label>
        <textarea
          value={isMessage}
          onChange={(e) => {
            setIsMessage(e.target.value);
          }}
          className="message"
          id="subject"
          name="subject"
          placeholder="Write your message....."
        ></textarea>
        <center>
          <button className="submit" type="submit" disabled={disabled}>
            Submit
          </button>
        </center>
      </form>
    </Wrapper>
  );
}

export default Contact;
