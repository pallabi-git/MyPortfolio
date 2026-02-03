import React, { useRef } from "react";
import styles from "./Contact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_r18spjo";
const TEMPLATE_ID = "template_0x30sjs";
const PUBLIC_KEY = "KKZ8zSCIkKLhIAc7y";

export default function Contact() {
  const formRef = useRef();

  const messageTemplate = {
    from_name:
      formRef.current?.from_first_name + " " + formRef.current?.from_last_name,
    from_email: formRef.current?.from_email,
    from_company: formRef.current?.from_company,
    subject: formRef.current?.subject,
    message: formRef.current?.message,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...", formRef.current);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        console.log("SUCCESS!");
        formRef.current.reset();
      },
      (error) => {
        console.log("FAILED...", error);
      },
    );
  };

  return (
    <div className={styles.container} id="contact">
      <h3 className={styles.title}>Contact</h3>
      <div className={styles.content}>
        <form ref={formRef} onSubmit={sendEmail}>
          <h4>Full Name</h4>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="fromName"
                name="from_name"
                required
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputEmail1" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail1"
                aria-describedby="emailHelp"
                name="from_email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <label htmlFor="inputCompany" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCompany"
                name="from_company"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="inputSubject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                id="inputSubject"
                name="subject"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="inputMessage" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="inputMessage"
                name="message"
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.sendBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
