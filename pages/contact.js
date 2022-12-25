import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section class="mb-4 p-5 mt-5 bg-black text-white">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <h1
        style={{ textSize: "30px" }}
        class="text-center w-responsive mx-auto mb-5"
      >
        Are you ready to digitaize your space? Get in touch with us!
      </h1>

      <div class="row d-flex justify-content-center">
        <div class="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div class="row my-3">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="name" class="">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="phone" class="">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    class="form-control"
                    placeholder="+91 12345 67890"
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
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    placeholder="Message..."
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div class="text-center text-md-left my-2">
            <a onClick={submitContact} class="btn btn-primary">
              Send
            </a>
          </div>
          <div class="status"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
