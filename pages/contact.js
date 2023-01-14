import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isPhone, setIsPhone] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isSubject, setIsSubject] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [isName, setIsName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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

  return (
    <section class="mb-4 p-5 mt-5 bg-black text-white">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <h1
        style={{ textSize: "30px" }}
        class="text-center w-responsive mx-auto mb-5"
      >
        {" "}
        Are you ready to digitaize your space? Get in touch with us!
      </h1>

      <div class="row d-flex justify-content-center">
        <div class="col-md-9 mb-md-0 mb-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
            name="contact-form"
          >
            <div class="row my-3">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="name" class="">
                    Your Name
                  </label>
                  <input
                    value={isName}
                    onChange={(e) => {
                      setIsName(e.target.value);
                    }}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="phone" class="">
                    Your Phone Number
                  </label>
                  <input
                    value={isPhone}
                    onChange={(e) => {
                      setIsPhone(e.target.value);
                    }}
                    type="text"
                    id="phone"
                    name="phone"
                    class="form-control"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="email" class="email">
                    Your Email-Id
                  </label>
                  <input
                    value={isEmail}
                    onChange={(e) => {
                      setIsEmail(e.target.value);
                    }}
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="yourmail@gmail.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row my-3">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="subject" class="">
                    Subject
                  </label>
                  <input
                    value={isSubject}
                    onChange={(e) => {
                      setIsSubject(e.target.value);
                    }}
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row my-3">
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Your message</label>
                  <textarea
                    value={isMessage}
                    onChange={(e) => {
                      setIsMessage(e.target.value);
                    }}
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Message..."
                    class="form-control md-textarea"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <input
                className="w-25"
                type="submit"
                value="Send"
                class="text-center text-md-left my-2 btn bg-white"
              />
            </div>
          </form>

          <div class="status"></div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
