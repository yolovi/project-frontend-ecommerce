import "./Contact.scss";
import React, { useState } from "react";

const Contact = () => {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div className="container-flex">
      <div id="container-contact">
        <h2 className="title"> Keep in Touch </h2>
        <div className="underline"></div>
        <form
          action="#"
          method="post"
          id="contact_form"
          className="form-contact"
        >
          <div className="name contact">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email contact">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="contact">
            <label htmlFor="telephone"></label>
            <input
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>
          <div className="contact">
            <label htmlFor="orderNumber"></label>
            <input
              type="text"
              placeholder="Order number"
              name="orderNumber"
              id="orderNumber"
            />
          </div>
          <div className="subject contact">
            <label htmlFor="subject"></label>
            <select
              placeholder="Subject line"
              name="subject"
              id="subject_input"
              required
              value={selectedSubject} 
              onChange={handleSubjectChange} 
            >
              <option disabled hidden value="">
                Subject line
              </option>
              <option value="start">I'd like to start a project</option>
              <option value="question">I'd like to ask a question</option>
              <option value="proposal">I'd like to make a proposal</option>
            </select>
          </div>
          <div className="msg-contact contact">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
            <h3>
              Please provide all the information about your issue you can.
            </h3>
          </div>
          <button
            className="btn-black"
            type="submit"
            form="contact"
            value="Send"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
